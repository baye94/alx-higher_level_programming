# 0x14. Javascript - Web scraping

===

## Description

---
Repository to study the following Topic: Web scraping with Javascript

### General

- How to manipulate JSON data
- How to use request and fetch API
- How to read and write a file using fs module

## Task Project

---
Notes: Request module has been deprecated since February 2020 - the team is considering alternative to replace this module - however, it’s a really simple and powerful module for practicing web-scraping in JavaScript (and still used a lot in the industry).

Dependences

0. Readme

Write a script that reads and prints the content of a file.

The first argument is the file path

The content of the file must be read in utf-8

If an error occurred during the reading, print the error object

guillaume@ubuntu:~/0x14$ cat cisfun
C is super fun!
guillaume@ubuntu:~/0x14$ ./0-readme.js cisfun
C is super fun!

guillaume@ubuntu:~/0x14$ ./0-readme.js doesntexist
{ Error: ENOENT: no such file or directory, open 'doesntexist'
    at Error (native)
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'doesntexist' }
guillaume@ubuntu:~/0x14$ 
Repo:

GitHub repository: holbertonschool-higher_level_programming
Directory: 0x14-javascript-web_scraping
File: 0-readme.js
1. Write me

Write a script that writes a string to a file.

The first argument is the file path

The second argument is the string to write

The content of the file must be written in utf-8

If an error occurred during while writing, print the error object

guillaume@ubuntu:~/0x14$ ./1-writeme.js my_file.txt "Python is cool"
guillaume@ubuntu:~/0x14$ cat my_file.txt ; echo ""
Python is cool
guillaume@ubuntu:~/0x14$
Repo:

GitHub repository: holbertonschool-higher_level_programming
Directory: 0x14-javascript-web_scraping
File: 1-writeme.js
2. Status code

Write a script that display the status code of a GET request.

The first argument is the URL to request (GET)

The status code must be printed like this: code: <status code>

You must use the module request