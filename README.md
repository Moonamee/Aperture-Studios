# Aperture Studios: Photographer Videomaker Studio

![device_cover](https://github.com/Moonamee/Aperture-Studios/assets/116831065/00356952-23d2-46c9-bab2-059166fc7910)

# Desktop / Tablet / Mobile

This is the basic layout of a photographer's
website. Smooth animation has been made,
suggestive pop-up elements focusing attention on
the main details. The black minimalistic design of
the site makes it possible to focus on the photo
and penetrate into the essence.

![cover](https://github.com/Moonamee/Aperture-Studios-Photographer-Videomaker/assets/116831065/641089ef-12f4-4633-907e-c7ef63332a48)

This site is a portfolio of a photographer and
videographer called Aperture Studios.

1. The main page of the site contains
information about the photographer and
videographer, as well as a description of their
work.

2. There is a menu in the site's header that
allows you to navigate to various sections such
as "Business areas", "Featured images", "Gear
cage", and "Contact".

3. The site also offers the option to download a
template.
</p>
<p>
4. The "What we do" section features the areas
in which the photographer and videographer
specialize, such as Product Photography,
Architecture Photography, Drone Photography, and
Wildlife Photography.

5. The site also contains sections with photo
demonstrations, information about the equipment
used, information about past clients, and the
ability to contact the photographer and
videographer.
</p>
<p>
6. The basement of the site has a logo,
navigation links, a newsletter subscription
form, and information about the site's author.

# JavaScript

The script contains several functions that
perform different actions when scrolling the
page and resizing the browser window.

1. The "Header bg parallax" function is
responsible for creating a parallax effect for
the header background. It selects all elements
with class "main-container__bg" and when
scrolling the page, it changes their background
position depending on the speed specified in the
"data-speed" attribute.

2. The "Header on top" function is responsible
for changing the position of the header as the
page scrolls. If the scroll reaches or exceeds
100 pixels, the header is moved up and the
animation is removed. If the scroll is less than
100 pixels, the header returns to its original
position and the animation is enabled. This only
happens when the screen width is greater than
768 pixels.

3. The "AOS OFF MOBILE" function is responsible
for disabling animation on mobile devices. It
selects all elements with the "data-aos"
attribute and when the browser window is
resized, it removes this attribute for elements
with a screen width less than or equal to 768
pixels. When the screen width is greater than
768 pixels, the "data-aos", "data-aos-offset"
and "data-aos-easing" attributes are restored
for elements. Thus, this script is used to
create a parallax effect for the header
background, change the position of the header
when scrolling and disable animation on mobile
devices.
