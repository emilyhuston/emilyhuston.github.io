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
    "01_EmilyHuston_ComediansonBikes.jpg": "Woman taking photo",
    "02_EmilyHuston_ThursdayRide.jpg": "People biking in the mist at night",
    "03_EmilyHuston_GreatWalkwayProtest.jpg": "Two men in a crowd of people protesting for the Great Walkway",
    "04_EmilyHuston_JFK_DriveProtest.jpg": "An older man and woman holding an I Heart JFK Drive sign at a protest",
    "05_EmilyHuston_GreatWalkway.jpg": "A man and woman rollerskating while holding hands at the Great Walkway",
    "06_EmilyHuston_JFK_DriveProtest.jpg": "A group of people biking from straight on",
    "07_EmilyHuston_JFK_DriveProtest.jpg": "A group of people biking in profile",
    "08_EmilyHuston_ComediansonBikes.jpg": "A man eating a donut",
    "09_EmilyHuston_JFK_Drive.jpg": "A woman biking on JFK Drive in gentle light",
    "10_EmilyHuston_ComediansonBikes.jpg": "A woman photographing a box of donuts while two others watch",
    "11_EmilyHuston_ComediansonBikes.jpg": "A man holding a camera with bubbles in the background",
    "12_EmilyHuston_JFK_HolidayParty.jpg": "A woman sitting on the ground with her children, nuzzling her daughter's nose",
    "13_EmilyHuston_GreatWalkway.jpg": "A young boy rides a bike at sunset on the Great Walkway",
    "14_EmilyHuston_ComediansonBikes.jpg": "People standing around with bikes, from above, on the Great Walkway",
    "15_EmilyHuston_GreatMusicway.jpg": "A 5-year-old riding a scooter on the Great Walkway",
    "16_EmilyHuston_GreatWalkwayProtest.jpg": "A group of protestors, one with a megahone, holding a sign saying Save the Great Walkway",
    "17_EmilyHuston_GreatMusicway.jpg": "A man embraces a woman from behind, looking out onto Ocean Beach",
    "18_EmilyHuston_Mendocino.jpg": "A man from profile in Mendocino",
    "19_EmilyHuston_ComediansonBikes.jpg": "A tricycle bike with a man steering, and woman and her dog sitting in it, everyone smiling",
    "20_EmilyHuston_JFK_DriveProtest.jpg": "A close-up of a boy riding a scooter",
    "21_EmilyHuston_SlowLake.jpg": "A girl riding a bike on Slow Lake Street",
    "22_EmilyHuston_GreatWalkway.jpg": "A beach sky vista",
    "23_EmilyHuston_RideofSilence.jpg": "A small dog in a bike basket dressed in warm clothes",
    "24_EmilyHuston_OnyxBikes.jpg": "A dog sleeping before a row of electric bikes",
    "25_EmilyHuston_GreatWalkway.jpg": "A man biking on the Great Walkway, with the silhouette of mountains in the background",
    "26_EmilyHuston_JFK_HolidayParty.jpg": "A portrait of a boy painting with watercolors outside",
    "27_EmilyHuston_JFK_HoldiayParty.jpg": "A portrait of a man playing saxophone",
    "28_EmilyHuston_JFK_HolidayParty.jpg": "A portrait of a woman kissing her son in her arms. They're both sitting and wearing hats.",
    "29_EmilyHuston_RideOfSilence.jpg": "A portrait of an older man affixing a poster to a pole affixed with flowers",
    "30_EmilyHuston_JFK_HolidayParty.jpg": "A portrait of a young toddler riding a bike",
}
path = os.path.join("..", "assets", "portfolio");
html_path = "assets/portfolio/"

for infile in os.listdir(path):
    if infile.lower().endswith("_small.jpg"):
        full_sized_name = infile[:-10] + ".jpg"
        alt = alt_text[full_sized_name]
        full_path = html_path + full_sized_name
        small_path = html_path + infile
        element = f"""          <a data-fslightbox="gallery" href="{full_path}">
            <img alt="{alt}" src="{small_path}">
          </a>"""
        print(element)

