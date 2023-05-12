'''
1. open terminal
2. go to this directory 
3. type: python3.7 batch_resize.py
all your jpg photos will be resized

ref: https://stackoverflow.com/a/451580
'''

import os, sys
from PIL import Image

widths = 300, 1024
extensions = "_sm.jpg", ".jpg"
input_path = "."
output_path = "./out"
os.makedirs(output_path)

if input_path == output_path:
    raise Exception("input path must be different than output path")

for infile in os.listdir(input_path):
    if infile.lower().endswith(".jpg"):
        for width, ext in zip(widths, extensions):
            outfile = os.path.splitext(infile)[0] + ext

            try:
                img = Image.open(infile)
                wpercent = (width/float(img.size[0]))
                hsize = int((float(img.size[1])*float(wpercent)))
                img = img.resize((width,hsize), Image.ANTIALIAS)
                img.save(os.path.join(output_path, outfile), "JPEG")
            except IOError:
                print("cannot create thumbnail for '%s'" % infile)

