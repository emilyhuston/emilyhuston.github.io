"""
1. open terminal in this directory
2. adjust alt_text for each image below (make sure all the filenames are 
   valid; you can run `ls -1a` to get all the filenames in the photo directory)
3. type: python3.7 make_image_html.py

This should print the HTML which you can copy into your project. Keep in mind that
there are multiple sections for portrait and landscape photos -- add those in by hand.

You can try: python3.7 make_image_html.py | pbcopy
to automatically put the text onto the clipboard so you don't have to copy paste.
python3.7 make_image_html.py > my_html.html sends it to a file.
"""

import os, sys

alt_text = {
    "emilyhuston_events_01.jpg": "Events",
    "emilyhuston_events_02.jpg": "Events",
    "emilyhuston_events_03.jpg": "Events",
    "emilyhuston_events_04.jpg": "Events",
    "emilyhuston_events_05.jpg": "Events",
    "emilyhuston_events_06.jpg": "Events",
    "emilyhuston_events_07.jpg": "Events",
    "emilyhuston_events_08.jpg": "Events",
    "emilyhuston_events_09.jpg": "Events",
    "emilyhuston_events_10.jpg": "Events",
    "emilyhuston_events_11.jpg": "Events",
    "emilyhuston_events_12.jpg": "Events",
    "emilyhuston_events_13.jpg": "Events",
    "emilyhuston_events_14.jpg": "Events",
    "emilyhuston_events_15.jpg": "Events",
    "emilyhuston_events_16.jpg": "Events",
    "emilyhuston_events_17.jpg": "Events",
    "emilyhuston_events_18.jpg": "Events",
    "emilyhuston_events_19.jpg": "Events",
    "emilyhuston_events_20.jpg": "Events",
    "emilyhuston_events_21.jpg": "Events",
    "emilyhuston_events_22.jpg": "Events",
    "emilyhuston_events_23.jpg": "Events",
    "emilyhuston_events_24.jpg": "Events",
    "emilyhuston_events_25.jpg": "Events",
    "emilyhuston_events_26.jpg": "Events",
    "emilyhuston_events_27.jpg": "Events",
   
    
    
}
#path = os.path.join("..", "assets", "portfolio");
path = "out"
html_path = "assets/portfolio/"

for infile in os.listdir(path):
    if infile.lower().endswith("_sm.jpg"):
        full_sized_name = infile[:-7] + ".jpg"
        alt = alt_text[full_sized_name]
        full_path = html_path + full_sized_name
        small_path = html_path + infile
        element = f"""          <a data-fslightbox="gallery" href="{full_path}">
            <img alt="{alt}" src="{small_path}">
          </a>"""
        print(element)

