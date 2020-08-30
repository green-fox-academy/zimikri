# Testing REST Service endpoints

For testing HTTP endpoints Spring MVC provides a great support. It provides very
nice middle solution between unit-testing and integration-testing where it lets
you stand up the entire Spring MVC DispatcherServlet-send request to the
specific Spring MVC controller, it is including validators,
HttpMessageConverters, and more - and then run tests against them without
actually starting up a real HTTP service.

## Materials & Resources

### Training

| Material                                                                                       |    Time |
| :--------------------------------------------------------------------------------------------- | ------: |
| [Spring Rest Test](https://spring.io/guides/gs/testing-web/)                                   | reading |
| [Deeper concept of JSONPath](http://www.baeldung.com/guide-to-jayway-jsonpath)                 | reading |
| [Spring Boot Controller Integration Test Example](https://www.youtube.com/watch?v=gNUm14kL7sI) |   14:18 |
| [Spring MVC Controllers other example][spring-controller-examples]                             | reading |

### Optional

More aspects, techniques of testing Spring Boot REST Web Services

| Material                                                                       |    Time |
| :----------------------------------------------------------------------------- | ------: |
| [Spring Boot Integration Testing](https://www.youtube.com/watch?v=Psei7F7KsDw) |   17:59 |
| [Spring Boot Unit Testing](https://www.youtube.com/watch?v=RbZvXCAtMus)        |   17:42 |
| [Data JPA Tests][testing-jpa]                                                  | reading |

## Material Review

- Why do we create automated tests?
  <!--
  - manual testing becomes longer and longer as the application grows,
    because you have to make sure the new code doesn't break existing features.
    Testing before a release can take up weeks slowing the whole process down.
    Automated tests are faster, more reliable, repeatable,
    and we can find bugs earlier in the process. -->
- What's a unit test?
  <!--
  - a test to make sure a small piece of code
    works as intended **in isolation** (i.e. separately) -->
- What's an integration test?
  <!--
  - a tests to make sure multiple components of
    the application work together correctly -->
- Why do we need both unit and integration tests?
  <!--
  - Unit tests are fast and cheap so they are
    good fit to test every possible scenario,
  - but with only unit tests you don't actually
    know anything about the app as a whole.  -->
- What's an endpoint test?
  <!--
  - A test which actually sends an HTTP request to an endpoint,
    and sets expectations for the response -->
- Why do we use mocking?
  <!--
    Because we want our unit tests to test classes in isolation,
    therefore, we substitute each dependency of the class with a
    fake version of the dependency called a mock.
    Mocks can be used in integration tests as well to substitute parts
    of the application we don't want to cover in a particular tets scenario,
    e.g. substitute the real database with an in memory store -->
- How to write an integration test using Spring Boot?
  <!--
  - use @RunWith(SpringRunner.class)
    and @SprintBootTest or @WebMvcTest(YourController.class)
    on the test cases -->
- What is and how to use MockMvc?
  <!--
  see below -->
- What is JSONPath and how to use it in tests?
  <!--
  see below -->

|             | Unit test                          | Integration test                                          |
| ----------- | ---------------------------------- | --------------------------------------------------------- |
| scope       | usually a single class or function | multiple layers of the application                        |
| speed       | fast (less than 50ms)              | slower, perhaps even seconds/minutes                      |
| count       | many (multiple thousands)          | fewer, order of magnitude fewer                           |
| build       | easy to create                     | takes longer to create                                    |
| debugging   | easy due to their small scope      | harder to figure out what is actually broken              |
| maintenance | cheap, easy to write/fix/change    | more expensive, breaks more often, takes more time to fix |

### Unit tests

In a unit test you test a single class in isolation.
The usual steps are (the so called AAA method):

1. (Arrange) Create a new instance of the class you want to test
1. (Act)     Call the method you want to test
1. (Assert)  Use an Assert to set your expectation

**Note that in a unit test the Sprint Application should not start; therefore,
you must not use the `@SprintBootTest` or `@WebMvcTest` annotations.**

### Integration tests

#### UserController.java

```java
package com.greenfoxacademy.shop.controller;

import com.greenfoxacademy.shop.model.entity.User;
import com.greenfoxacademy.shop.model.entity.UserControllerResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  @PostMapping("/users")
  public ResponseEntity<UserControllerResponse> addNewUser(@RequestBody User user) {
    if (user.getEmail() == null || user.getEmail().length() == 0) {
      return new ResponseEntity(new UserControllerResponse("fail", "Email is missing"), HttpStatus.BAD_REQUEST);
    } else {
      return new ResponseEntity(new UserControllerResponse("success", "User is added"), HttpStatus.OK);
    }
  }
}
```

#### UserControllerTest.java

```java
package com.greenfoxacademy.shop.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.nio.charset.Charset;

import static org.hamcrest.core.Is.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
public class UserControllerTest {

  private MediaType contentType = new MediaType(MediaType.APPLICATION_JSON.getType(),
      MediaType.APPLICATION_JSON.getSubtype(),
      Charset.forName("utf8"));

  @Autowired
  private MockMvc mockMvc;

  // if an additional service layer is used
  // - meaning not all logic is added to the controller and you have Autowired fields in it -
  // then you have to mock out the service class like below
  //
  //@MockBean
  //private UserService userService;

  @Test
  public void addNewUser_succesfull() throws Exception {
    mockMvc.perform(post("/users")
        .contentType(MediaType.APPLICATION_JSON)
        .content("{\"email\": \"name@example.com\", \"password\": \"12345\"}"))
        .andExpect(status().isOk())
        .andExpect(content().contentType(contentType))
        .andExpect(jsonPath("$.result", is("success")))
        .andExpect(jsonPath("$.message", is("User is added")));
  }

  @Test
  public void addNewUser_missingEmail() throws Exception {
    mockMvc.perform(post("/users")
        .contentType(MediaType.APPLICATION_JSON)
        .content("{\"password\": \"12345\"}"))
        .andExpect(status().isBadRequest())
        .andExpect(content().contentType(contentType))
        .andExpect(jsonPath("$.result", is("fail")))
        .andExpect(jsonPath("$.message", is("Email is missing")));
  }
}
```

## Workshops

- Open your previous workshop project
- Create tests for all the endpoints
  - Use the frontend's checks for different test cases
  - Figure out similar test cases what the frontend does not cover

### Optional

- [Groot](iamgroot/java.md)
- [Arrow](arrow/README.md)
- [💪Cargo](cargo/README.md)
- [💪💪Calorie Table](calorietable/README.md)
- [💪💪Awesome Mix](awesome/README.md)

[spring-controller-examples]: https://www.petrikainulainen.net/programming/spring-framework/unit-testing-of-spring-mvc-controllers-rest-api/
[testing-jpa]: https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-testing.html#boot-features-testing-spring-boot-applications-testing-autoconfigured-jpa-test
