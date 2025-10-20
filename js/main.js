ROOT_URL = "../"
const HDR_ID = "_header"
const FTR_ID = "_footer"
const HDR_FILENAME = ROOT_URL + "res/html/header_content";
const FTR_FILENAME = ROOT_URL + "res/html/footer_content";

async function fetchHeader() {
  const response_hdr = await fetch(HDR_FILENAME);
  if (!response_hdr.ok) throw new Error(`HTTP error: ${response_hdr.status}`);
  const hdr_content = await response_hdr.text();
  return hdr_content;
}

async function fetchFooter() {
  const response_ftr = await fetch(FTR_FILENAME);
  if (!response_ftr.ok) throw new Error(`HTTP error: ${response_ftr.status}`);
  const ftr_content = await response_ftr.text();
  return ftr_content;
}

function convertLinksInHtml(html_content) {
  // TO-DO : write code to transform html_content
  return html_content;
}

async function start() {
  const header_tag = document.getElementsByTagName("header")[0];
  const footer_tag = document.getElementsByTagName("header")[0];

  try {
    // const hdr_content = await fetchHeader();
    // const ftr_content = await fetchFooter();

    const [hdr_content, ftr_content] = await Promise.all([
      fetchHeader(),
      fetchFooter()
    ]);

    hdr_content = convertLinksInHtml(hdr_content);
    ftr_content = convertLinksInHtml(ftr_content);

    header_tag.innerHTML = hdr_content;
    footer_tag.innerHTML = ftr_content;
  }
  catch (err) {
    console.error("Failed to start !", err);
  }
}

document.addEventListener("DOMContentLoaded", start)