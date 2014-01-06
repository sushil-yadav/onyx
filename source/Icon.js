/**
	A control that displays an icon. The icon image is specified by setting the
	*src* property to a URL.

	In Onyx, icons have a size of 32x32 pixels. Since the icon image is applied
	as a CSS background, the height and width of an icon must be set if an image
	of a different size is used.

		{kind: "onyx.Icon", src: "images/search.png"}

	When an icon should act like a button, use an <a href="#onyx.IconButton">onyx.IconButton</a>.

*/
enyo.kind({
	name: "onyx.Icon",
	kind: "enyo.common.Icon",
	classes: "onyx-icon"
});