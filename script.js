async function fetchImages() {
    const folderId = "1SuvxzOKTDLttjyMegQlwzqVFogUo-h0Q";
    const apiKey = "AIzaSyBZvDPbgI1B3nxTSJo1yumQTWQENGHybok";
    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(id,name,mimeType,webViewLink,thumbnailLink)&key=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    data.files.forEach(file => {
        if (file.mimeType.startsWith("image/")) {
            const img = document.createElement("img");
            img.src = file.thumbnailLink;
            gallery.appendChild(img);
        }
    });
}
