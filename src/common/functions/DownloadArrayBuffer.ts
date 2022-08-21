function downloadArrayBuffer (contents: ArrayBuffer, filename: string) {
  const url = (window.URL || window.webkitURL).createObjectURL(new Blob([contents]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename); //or any other extension
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export default downloadArrayBuffer