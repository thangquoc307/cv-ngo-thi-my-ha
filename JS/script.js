let isen = false;
const translations = {
    en: {
        name: "NGO THI MY HA",
        job_title: "ACCOUNT MANAGER",
        school: "Industrial University of Ho Chi Minh City",
        education: "EDUCATION",
        major: "- Business Finance",
        gpa: "- GPA: 3.0/4.0",
        languages: "LANGUAGES",
        english_score: "- 164/200 Aptis ESOL",
        skills: "SKILLS",
        skill_1: "- Microsoft Office: Competent in Excel, Word, PowerPoint",
        skill_2: "- Project Management",
        skill_3: "- Teamwork",
        skill_4: "- Time Management",
        skill_5: "- Effective Communication",
        skill_6: "- Critical Thinking",
        profile: "PROFILE",
        profile_desc_1: "With 3 years of deep experience in networking, I have successfully sold various network solutions, including Switches, Routers, Firewalls, and Wireless from top brands like Cisco, Aruba, and Ruijie. I have achieved outstanding results in building customer relationships, providing solutions, and exceeding sales targets.",
        profile_desc_2: "In the role of an internal sales consultant, I have worked directly with major clients, gained a deep understanding of their needs, and provided optimal solutions. I believe this experience will contribute effectively to the position of Sales Manager in the future.",
        work_experience: "WORK EXPERIENCE & DUTIES",
        company_1: "SSS VIET NAM.,JSC",
        company_2: "MB BANK",
        position_1: "Account Manager",
        position_2: "Intern Customer Specialist",
        sales_management: "Sales management: responsible for managing and growing sales for products from top technology brands such as Cisco, Aruba, Ruijie, H3C, Fortinet, HPE, Palo Alto, Gigalight, Airpro, Rosenberger, Arita,... in the HCM area.",
        responsibility_1: "Achieve annual sales targets for product lines.",
        responsibility_2: "Provide detailed product information, answer inquiries, and offer suitable solutions to customers.",
        responsibility_3: "Negotiate pricing, contract terms, provide CO, CQ documents, and support customers during contract signing.",
        responsibility_4: "Maintain and develop good relationships with business partners and suppliers.",
        responsibility_5: "Master product information and warranty policies of each supplier.",
        responsibility_6: "Manage existing dealers while expanding the dealer network through training activities, seminars, webinars, etc.",
        responsibility_7: "Attend business conferences and seminars.",
        responsibility_8: "Develop and use inventory and back-office management tools.",
        responsibility_9: "Ability to run Bill of Materials (BOM) for Cisco & Aruba.",
        mb_responsibility_1: "Plan and implement personal business plans.",
        mb_responsibility_2: "Manage assigned customer portfolios. Conduct in-depth exploration and cross-selling of products and services to customers. Identify and develop new customers.",
        mb_responsibility_3: "Executed a campaign to open more than 100 accounts at the Dental Hospital.",
        mb_responsibility_4: "Cross-sold over 150 hybrid Visa cards.",
        mb_responsibility_5: "Recognized as an outstanding intern specialist.",
        location: "Address: 440 Thong Nhat, Go Vap District, Ho Chi Minh City",
        certification: "CERTIFICATE",
        date: "- Date: ",
        institution: "- Institution: "
    },
    vi: {
        name: "NGÔ THỊ MỸ HẠ",
        job_title: "QUẢN LÝ TÀI KHOẢN",
        education: "GIÁO DỤC",
        school: "ĐẠI HỌC CÔNG NGHIỆP TPHCM",
        major: "- Tài chính doanh nghiệp",
        gpa: "- GPA: 3.0/4.0",
        languages: "NGÔN NGỮ",
        english_score: "- 164/200 Aptis ESOL",
        skills: "KỸ NĂNG",
        skill_1: "- Microsoft Office: Thành thạo Excel, Word, PowerPoint",
        skill_2: "- Quản lý dự án",
        skill_3: "- Làm việc nhóm",
        skill_4: "- Quản lý thời gian",
        skill_5: "- Giao tiếp hiệu quả",
        skill_6: "- Tư duy phản biện",
        profile: "HỒ SƠ CÁ NHÂN",
        profile_desc_1: "Với 3 năm kinh nghiệm chuyên sâu trong lĩnh vực mạng, tôi đã thành công trong việc bán các giải pháp mạng đa dạng, bao gồm Switch, Router, Firewall và Wireless của các hãng hàng đầu như Cisco, Aruba, Ruijie. Tôi đã đạt được nhiều thành tích xuất sắc trong việc xây dựng mối quan hệ khách hàng, tư vấn giải pháp và đạt vượt mức doanh số.",
        profile_desc_2: "Trong vai trò tư vấn bán hàng nội bộ, tôi đã trực tiếp làm việc với các khách hàng lớn, hiểu rõ nhu cầu của họ và đưa ra các giải pháp tối ưu. Tôi tin rằng kinh nghiệm này sẽ đóng góp hiệu quả vào vị trí trưởng phòng kinh doanh trong tương lai.",
        work_experience: "KINH NGHIỆM LÀM VIỆC & NHIỆM VỤ",
        company_1: "CÔNG TY CỔ PHẦN SSS VIỆT NAM",
        company_2: "NGÂN HÀNG QUÂN ĐỘI (MB BANK)",
        position_1: "Quản lý khách hàng",
        position_2: "Chuyên viên tập sự khách hàng cá nhân",
        sales_management: "Quản lý bán hàng: chịu trách nhiệm quản lý và phát triển doanh số cho các sản phẩm của các hãng công nghệ hàng đầu như Cisco, Aruba, Ruijie, H3C, Fortinet, HPE, Palo Alto, Gigalight, Airpro, Rosenberger, Arita,... tại khu vực HCM.",
        responsibility_1: "Hoàn thành mục tiêu doanh số hàng năm cho các dòng sản phẩm.",
        responsibility_2: "Cung cấp thông tin chi tiết về sản phẩm, giải đáp thắc mắc và tư vấn giải pháp phù hợp cho khách hàng.",
        responsibility_3: "Thực hiện đàm phán về giá cả, điều khoản hợp đồng, cung cấp chứng từ CO, CQ và hỗ trợ khách hàng trong quá trình ký kết hợp đồng.",
        responsibility_4: "Duy trì và phát triển mối quan hệ tốt với các đối tác kinh doanh và nhà cung cấp.",
        responsibility_5: "Nắm vững thông tin về sản phẩm và chính sách bảo hành của từng nhà cung cấp.",
        responsibility_6: "Quản lý các đại lý hiện có, đồng thời mở rộng mạng lưới đại lý mới thông qua các hoạt động đào tạo, hội thảo, webinar,...",
        responsibility_7: "Tham gia các hội nghị, hội thảo về chủ đề kinh doanh.",
        responsibility_8: "Công cụ quản lý: xây dựng và sử dụng các công cụ quản lý kho hàng và back office.",
        responsibility_9: "BOM: Có khả năng chạy Bill of Material của hãng Cisco & Aruba.",
        mb_responsibility_1: "Lập kế hoạch và triển khai kế hoạch kinh doanh cá nhân.",
        mb_responsibility_2: "Quản lý danh mục khách hàng được phân giao. Thực hiện khai thác sâu và bán chéo các sản phẩm dịch vụ cho khách hàng. Tìm hiểu và phát triển khách hàng mới.",
        mb_responsibility_3: "Chạy chiến dịch mở thẻ hơn 100 tài khoản ở bệnh viện răng hàm mặt.",
        mb_responsibility_4: "Bán chéo hơn 150 thẻ visa hybrid.",
        mb_responsibility_5: "Được vinh danh chuyên viên tập sự xuất sắc.",
        location: "Địa chỉ: 440 Thống nhất, Q.Gò Vấp, TP.Hồ Chí Minh",
        certification: "CHỨNG CHỈ",
        date: "- Ngày cấp: ",
        institution: "- Tổ chức: "
    }
};
const certificate = [
{
    name: "Ruijie Certified Pre Sales",
    date: "2026-02-13",
    institution: "Ruijie Networks Co., Ltd.",
    pic: "/media/Ruijie_Pre_Sales.png"
},
{
    name: "Ruijie Certified Sales",
    date: "2026-06-07",
    institution: "Ruijie Networks Co., Ltd.",
    pic: "/media/Ruijie_Sales.png"
}
]

function setLanguage() {
    isen = !isen;
    let lang = isen ? 'en' : 'vi';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });
}

function callPhone() {
    window.location.href = "tel:0345001058";
}

function sendEmail() {
    window.location.href = "mailto:myha.240401@gmail.com";
}

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/ngô-thị-mỹ-hạ", "_blank");
}

function uploadCertification () {
let data = certificate.reduce((totalVal, val, index) => {
    return totalVal + `<div>
                <img src="${val.pic}"/>
                <h3>${val.name}</h3>
                <div>
                    <p><span data-i18n="date"></span>${val.date}</p>
                    <p><span data-i18n="institution"></span>${val.institution}</p>
                </div>
                <div class="certificate-button">
                    <span
                        class="material-symbols-outlined"
                        onclick="showCertification(${index})"
                    >photo_library</span>
                </div>
            </div>`
    }, "")
    document.getElementById("certificate-box").innerHTML = data
}

function showCertification (index) {
    let currentData = certificate[index];
        $(document).ready(function () {
        $("#overlay").fadeIn();
        $("#popup").css({
            "display": "grid",
            "top": "-100%"})
            .show().animate({ top: "30px" }, 500);
        $("#popup-img").attr("src", currentData.pic);
        $("#popup-name").text(currentData.name);
    });
}

function closePopup () {
    $("#popup").animate({ top: "-100%" }, 500, function () {
        $(this).hide();
        $("#overlay").fadeOut();
    });
}

uploadCertification()
setLanguage()