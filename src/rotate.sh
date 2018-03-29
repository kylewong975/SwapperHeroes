#!/bin/bash

# Instructions:
# You must install magick
# For macOS, I used Homebrew to install, so run the following command:
# brew install imagemagick
# Then, replace samplefolder with your folder of images you
# want to batch rotate. There are other methods to manipulate
# images. Check here: https://www.imagemagick.org/script/magick.php

for f in "./samplefolder/*"
do
    magick convert $f -rotate 90 $f
done
