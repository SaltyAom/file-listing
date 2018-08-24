<?php
    # Project: Raitosuki II: File listing
    # Create by aomkirby123 for more information please see
    # https://www.github.com/aomkirby123/fileListing

    # Set initial directory
    $initDir = "./../..";

    $returnValue = isset($_POST["return"]) ? safe($_POST["return"]) : "0";
    $currentDir = isset($_POST["dir"]) ? safe($_POST["dir"]) : "";

    function fileTab($initDir,$currentDir,$value){
        echo "
        <div class='tab file' dir='$currentDir/$value'>
            <a href='$initDir/$currentDir/$value'>
                <img class='icon icon-file' src='img/file.svg'>
                $value
            </a>
        </div>";
    }

    function folderTab($currentDir,$value){
        echo "
        <div class='tab folder' dir='$currentDir/$value'>
            <img class='icon icon-folder' src='img/folder.svg'>
            $value
        </div>";
    }

    function safe($input){
        $safe = htmlspecialchars($input);
        $safe = stripslashes($input);
        $safe = strip_tags($input);
        return $safe;
    }
    
    $prevDir = rtrim($currentDir,"/");
    if($returnValue == 1){ $prevDir = strrev(strstr(strrev($prevDir),"/")); }
    if($initDir != $initDir.$currentDir && $currentDir != "/"){
        echo "
        <div class='tab folder' dir='$prevDir' returnvalue='1'>
            <img class='icon icon-folder' src='img/folder.svg'>
            Previous folder
        </div>";
    }    
    if($returnValue == 0){
        if($currentDir == ""){
            $readDir = scandir($initDir,2);
        } else {
            $readDir = scandir("$initDir/$currentDir",2);
        }
        foreach($readDir as $key => $value){
            if($value != "." && ($value != ".." && $currentDir != $initDir)){
                if(is_dir("$initDir/$currentDir/$value")){
                    echo folderTab($currentDir,$value);
                } else {
                    echo fileTab($initDir,$currentDir,$value);
                }
            }
        }
    } else {
        if($currentDir == "" || $currentDir == $initDir || $currentDir == "/"){
            $readDir = scandir($initDir,2);
        } else {
            $newDir = rtrim(strrev(strstr(strrev($prevDir),"/")),"/");
            $readDir = scandir("$initDir/$prevDir",2);
        }
        foreach($readDir as $key => $value){
            if($value != "." && ($value != ".." && $currentDir != $initDir)){
                if(is_dir("$initDir/$newDir/$value")){
                    echo folderTab($newDir,$value);
                } else {
                    echo fileTab($initDir,$newDir,$value);
                }
            }
        }
    }
?>