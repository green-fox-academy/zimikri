'use strict'

// Reuse your BlogPost class
// Create a Blog class which can
//     store a list of BlogPosts
//     add BlogPosts to the list
//     delete(int) one item at given index
//     update(int, BlogPost) one item at the given index and update it with another BlogPost

import BlogPost from './BlogPost';
import Blog from './Blog';

const blog: Blog = new Blog();

blog.add(new BlogPost(
    'Lorem Ipsum', 
    'Lorem ipsum dolor sit amet', 
    'John Doe',
    '2000.05.04.'
)); 
blog.add(new BlogPost(
    'Wait but why', 
    'A popular long-form, stick-figure-illustrated blog about almost everything.', 
    'Tim Urban', 
    '2010.10.10.'
)); 
blog.add(new BlogPost(
    'One Engineer Is Trying to Get IBM to Reckon With Trump', 
    'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', 
    'William Turton', 
    '2017.03.28.'
)); 

console.log(`${blog}`);
console.log(`-------------------`);

blog.update(2, new BlogPost(
    'UPDATED!!! One Engineer Is Trying to Get IBM to Reckon With Trump', 
    'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', 
    'William Turton', 
    '2020.03.28.'
));
console.log(`${blog}`);
console.log(`-------------------`);

blog.delete(10);
console.log(`${blog}`);
