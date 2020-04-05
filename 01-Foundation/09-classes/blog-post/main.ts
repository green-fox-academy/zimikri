'use strict'

import BlogPost from './BlogPost';

const Post1: BlogPost = new BlogPost(
    'Lorem Ipsum', 
    'Lorem ipsum dolor sit amet', 
    'John Doe',
    '2000.05.04.'
); 
const Post2: BlogPost = new BlogPost(
    'Wait but why', 
    'A popular long-form, stick-figure-illustrated blog about almost everything.', 
    'Tim Urban', 
    '2010.10.10.'
); 
const Post3: BlogPost = new BlogPost(
    'One Engineer Is Trying to Get IBM to Reckon With Trump', 
    'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', 
    'William Turton', 
    '2017.03.28.'
); 

console.log(`${Post1}`);
console.log(`${Post2}`);
console.log(`${Post3}`);
