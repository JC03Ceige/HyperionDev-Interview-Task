Dear student, well done on completing the task.

Your code is well presented and easy to follow based on the logic that you have implemented. I can
also see that you have a good idea of how you would like to achieve your results. There are just a
few things you should have a look at to make everything run more smoothly.

--Correctness

In line 5 you use a strongly typed function and although it is clear what the outcome should be, it
does lack the proper syntax to run the code as you desire.
Please read-up on typescript functions in the following link https://www.typescriptlang.org/docs/handbook/2/functions.html
and correct any syntactical errors you have in your code.
There is also the matter of the type "T" that you never declare or specify. Make sure you understand
the use of strongly typed functions and that you are implementing it correclty.
The first parameter you pass is also not declared properly and you never use it within your block of
code. HINT: In line 10 you declare encodedText but the value remains empty because no value is ever
passed to this variable.

Your if statement on line 13 needs to be re-evaluated. Keep in mind that you are working
with different types (string vs number) that are not comparable. Also keep in mind that there are
strict rules when working with operators. There are alot good resources to help you with this, here
is a good place to start, https://www.tutlane.com/tutorial/typescript/typescript-operators. You're
implementation of the modulo operator also indicates that your function is incomplete or at least
not doing what you need it to. The link above will also help but do a bit more research on algorithms
and the use of the modulo operator.

To debug your code as you go along, use console.log() to check the output of your code. This way you
will be able to see if you are on the right track.

--Efficiency

When writing code, always keep the time-complexity in mind (your code should run in the shortest
amount of time possible). This means leaving redundant methods and functions out of t your code.
Look at line 23 and think if you really need to implement all the functions in your chain.

You might also want to consider casting your string to an array and then manipulating the array. This
will help you to check for white space between words.

--Style

--Documentation

It is also very good that you commented on most code blocks. It is important to keep in mind that
the person who will be working with your code next, has no-idea what your implementations are and
it is therefore very important that your comments are more descriptive in nature and that comment
on each block of code that you write.

--
All in all this was a really good attempt and you're definitely thinking along the right lines, it is
just some technical details that need some work.
