# File-listing
An simple PHP script to create file listing with jQuery, AJAX.

![Example](https://raw.githubusercontent.com/aomkirby123/file-listing/master/screenshot/Example.jpg)
For live demo visit [https://www.mystia-project.com/file%20listing]

## Instruction
File listing is an open-source project for setting up directory listing on open-website, powered by PHP and jQuery with AJAX.
Written with simple PHP script, with instruction in, only need to edit some line and everything will work perfectly.

## TL;DR
This is file-listing open-source project powered by PHP, jQuery, AJAX.

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

* PHP5 or newer
* jQuery 1.12.4 (Or jQuery 1.5 or newer)
* JavaScript (Vanilla)

## Developer
* [aomkirby123](https://www.github.com/aomkirby123) - Developer of this project.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
