const dropArea = document.getElementById('drop-area');
const fileElem = document.getElementById('fileElem');
const fileSelect = document.getElementById('fileSelect');
const fileList = document.getElementById('file-list');

fileSelect.addEventListener('click', () => fileElem.click());

['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, e => {
    e.preventDefault();
    dropArea.classList.add('hover');
  }, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, e => {
    e.preventDefault();
    dropArea.classList.remove('hover');
  }, false);
});

dropArea.addEventListener('drop', e => {
  const files = e.dataTransfer.files;
  handleFiles(files);
});

fileElem.addEventListener('change', () => {
  handleFiles(fileElem.files);
});

function handleFiles(files) {
  fileList.innerHTML = '';
  [...files].forEach(file => {
    const p = document.createElement('p');
    p.textContent = `📄 ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
    fileList.appendChild(p);
  });
}
