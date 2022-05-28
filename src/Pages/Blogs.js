import React from 'react';

const Blogs = () => {
    return (
        <div className='xl:w-[80%] lg:w-[80%] mx-auto h-screen'>
            <h2 className='text-3xl  font-bold'>How to improve React app performance : </h2>
            <p className='text-2xl'>
                In order to make a React app performance we need to concern  - to give necessary props in a component, using immutable data structure , using stateless component or functional component , need to concern about dependency and so many .
            </p>
            <div className='my-12'>
                <h2 className='text-3xl  font-bold'>Difference ways to manage state  </h2>
                <p className='text-2xl '>
                    There are many ways to manage states in React . Some of are -
                    <p>
                        1. using hooks in react
                    </p>
                    <p>
                        2.Using context API
                    </p>
                    <p>
                        3.Using Local State in rect
                    </p>
                </p>
            </div>
            <h2 className='text-3xl  font-bold'>What does Prototypal inheritance work ? </h2>
            <p className='text-2xl'>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
            </p>
            <h2 className='text-3xl  font-bold'>What is a unit test? Why should write unit tests? </h2>
            <p className='text-2xl'>
                Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.
            </p>
        </div>
    );
};

export default Blogs;