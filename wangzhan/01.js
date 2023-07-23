function toggleParts() {
    const part1 = document.getElementById("part1");
    const part2 = document.getElementById("part2");

    // 切换显示状态
    part1.classList.add("hidden");
    part2.classList.remove("hidden");
}
function toggleParts2() {
    const part1 = document.getElementById("part2");
    const part2 = document.getElementById("part1");

    // 切换显示状态
    part1.classList.add("hidden");
    part2.classList.remove("hidden");
}
window.onload = function () {
    let savedDianZanShu = localStorage.getItem("dianZanShu");
    if (savedDianZanShu !== null) {
        document.getElementById("dianZanShu").innerText =
            savedDianZanShu;
    }
};

function dainZan() {
    let dainZanShuBioaQian =
        document.getElementById("dianZanShu");
    let dainZanShu = parseInt(dainZanShuBioaQian.innerText);
    let xinshuzi = dainZanShu + 1;
    dainZanShuBioaQian.innerText = xinshuzi;

    localStorage.setItem("dianZanShu", xinshuzi);
}
const imageWithTooltip = document.getElementById('image-with-tooltip');
const hiddenDiv = document.getElementById('hidden-div');

imageWithTooltip.addEventListener('mouseover', function() {
  hiddenDiv.style.display = 'block';
});

imageWithTooltip.addEventListener('mouseout', function() {
  hiddenDiv.style.display = 'none';
});

