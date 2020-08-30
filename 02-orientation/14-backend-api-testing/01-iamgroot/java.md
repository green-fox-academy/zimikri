# I am groot!

- Create a new Spring project with dependencies: web, devtools
- Create a GuardianController class with a `GET /groot` endpoint
- This endpoint can receive a query parameter: `message=somemessage`, and
  responds with HTTP Status OK and a json object with a translated text like
  below:
  ```json
  {
    "received": "somemessage",
    "translated": "I am Groot!"
  }
  ```
- If no input is provided, the endpoint should respond with HTTP Status Bad
  Request and return the below json object
  ```json
  {
    "error": "I am Groot!"
  }
  ```
- Create a GuardianControllerTest class
- Add the necessary annotations:
  - `@RunWith(SpringRunner.class)`
  - `@WebMvcTest(GuardianController.class)`
- Set up the outline like in the example below:
  ```java
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void methodName_testCase(){
        ...
    }
  ```
- Write the below tests:
  - With giving a parameter:
    - the status is ok
    - the given response is the same as expected
  - Without giving a parameter:
    - the status is not ok
    - the given error response is the same as expected

[![](../assets/groot.jpg)](https://www.youtube.com/watch?v=HplYmXMo4Jc)
