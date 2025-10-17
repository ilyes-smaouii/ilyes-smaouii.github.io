const HDR_ID = "_header"
const FTR_ID = "_footer"
const HDR_FILENAME = "../res/html/header_content";
const FTR_FILENAME = "../res/html/footer_content";

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

async function start() {
  const header_tag = document.getElementById(HDR_ID);
  const footer_tag = document.getElementById(FTR_ID);

  try {
    // const hdr_content = await fetchHeader();
    // const ftr_content = await fetchFooter();

    const [hdr_content, ftr_content] = await Promise.all([
      fetchHeader(),
      fetchFooter()
    ]);

    header_tag.innerHTML = hdr_content;
    footer_tag.innerHTML = ftr_content;
  }
  catch (err) {
    console.error("Failed to start !", err);
  }
}

document.addEventListener("DOMContentLoaded", start)