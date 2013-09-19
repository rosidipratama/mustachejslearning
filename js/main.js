function addbook() {
	var person = {
		title: "Title",
		authorName: "Author Name",
		publisherName: "Publisher Name",
		cover: "Cover"
	};
	var template = "<p>{{title}} : <input type='text' id='title'></p><p>{{authorName}} : <input type='text' id='authorName'></p><p>{{publisherName}} : <input type='text' id='publisherName'></p><p>{{cover}} : <input type='file' id='cover' value='browse' class='button'></p><p><input type='submit' value='submit' class='button'></p>";
	var html = Mustache.to_html(template, person);
	$('#displayblok').html(html);
}