#!/bin/bash
# Dev

pwd | pbcopy

open -a "Visual Studio Code" .
open .

open /Applications/Firefox.app -g http://localhost:4000

jekyll build
jekyll serve
