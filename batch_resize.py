'''
1. open terminal
2. go to this directory 
3. type: python3.7 batch_resize.py
all your jpg photos will be resized

ref: https://stackoverflow.com/a/451580
'''

import os, sys
from PIL import Image

basewidth = 1000 # you might want to change this (pixels)

for infile in os.listdir("."):
    if infile.lower().endswith(".jpg"):
        outfile = os.path.splitext(infile)[0] + "_small.jpg"

        if infile != outfile:
            try:
                img = Image.open(infile)
                wpercent = (basewidth/float(img.size[0]))
                hsize = int((float(img.size[1])*float(wpercent)))
                img = img.resize((basewidth,hsize), Image.ANTIALIAS)
                img.save(outfile, "JPEG")
            except IOError:
                print("cannot create thumbnail for '%s'" % infile)

