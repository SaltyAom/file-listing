# File-listing
An simple PHP script to create file listing with AJAX.

![Example](https://raw.githubusercontent.com/aomkirby123/file-listing/master/screenshot/Example.jpg)
For live demo visit [https://www.mystia-project.com/fileListing]

## Instruction
File listing is an open-source project for setting up directory listing on open-website, powered by PHP with AJAX.
Written with simple PHP script, with instruction in, only need to edit some line and everything will work perfectly.

## TL;DR
This is file-listing open-source project powered by PHP, AJAX.

## Getting start
Clone the repository and deploy as folder into web server, make sure web server is supported atleast PHP5.

Set the *$initDir* in *app/read.php* to change initial directory.
...
  // Set initial directory
  $initDir = "./../..";
...

## Note and warning
For safety the file-listing couldn't go outside the set $initDir, meaning this cannot read directory beyond set.
(For some reason, some web server couldn't use *"/"* as *$initDir* try using *"./../Path/to/directory"* instead)

## Compatibility
List of compatibility to use this project.

* PHP 5.6+ installed
* JavaScript must enable

## Browser Support
For using XMLHttpRequest (AJAX), it is best to use in:

##### Best Practice
* Internet Edge: 12+
* Firefox: 12+
* Chrome: 31+
* Opera: 18+
* Safari: 7.1+
* iOS Safari: 8+
* Opera mini: All
* Android Browser: 4.4.4+
* Opera Mobile: 46+
* Chrome for android: All
* Firefox for android: All
* UC Browser for Android: All
* Samsung Internet: All
* QQ Browser: 1.2+
* Baidu Browser: 7.12+

#### tl;dr: It's supported in all browser except Internet Explorer.

## Developer
* [aomkirby123](https://www.github.com/aomkirby123) - Developer of this project.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
