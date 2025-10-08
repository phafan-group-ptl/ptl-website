document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        th: {
            site_title: "ที่ปรึกษาบัญชีและกฎหมาย - PTL Achievement",
            site_description: "บริการรับทำบัญชี ที่ปรึกษาด้านภาษี กฎหมาย และการจดทะเบียนบริษัทครบวงจร",
            company_name: "PTL Achievement",
            nav_home: "หน้าหลัก",
            nav_consulting: "งานที่ปรึกษา",
            nav_law: "งานกฎหมาย",
            nav_accounting: "งานบัญชี",
            nav_foreigner: "งานคนต่างชาติ",
            nav_about: "เกี่ยวกับ",
            nav_contact: "ติดต่อเรา",
            b_reg_partnership: "ห้างหุ้นส่วนจำกัด/บริษัทจำกัด",
            b_reg_foreign: "นิติบุคคลต่างชาติ",
            b_reg_boi: "BOI",
            b_reg_rep: "สำนักงานผู้แทน",
            b_reg_jv: "Joint Venture/Consortium",
            b_reg_personal: "ธุรกิจเจ้าของคนเดียว",
            b_reg_vat: "การจดทะเบียนภาษีมูลค่าเพิ่ม",
            b_reg_rd: "การจดทะเบียนรูปแบบอื่นของกรมสรรพากร",
            b_reg_sso: "การขึ้นทะเบียนประกันสังคม",
            b_reg_customs: "การขอใบอนุญาตนำเข้า/CUSTOMS Paperless",
            b_reg_fda: "การขอ อย./FDA and FDA Import License",
            b_reg_other: "การขอใบอนุญาตต่าง ๆ",
            b_consult_problem: "รับปรึกษาปัญหาธุรกิจ",
            law_consulting: "ปรึกษาคดีความ, ไกล่เกลี่ย, ทำสัญญา",
            law_contract_drafting: "รับทำและตีความสัญญาทุกประเภท",
            law_litigation: "รับว่าความทั่วราชอาณาจักร",
            law_registration: "รับจดทะเบียนธุรกิจและใบอนุญาต",
            law_estate: "รับจัดการมรดก",
            acc_closing: "รับทำบัญชี, ปิดงบ, ตรวจสอบบัญชี, ยื่นแบบ",
            acc_monthly_tax: "รับทำบัญชีภาษีอากรรายเดือน",
            acc_monthly_report: "รับทำรายงานทางบัญชีและการเงินรายเดือน",
            acc_consulting: "รับปรึกษาปัญหาทางบัญชี",
            for_visa: "รับทำวีซ่าสำหรับต่างชาติในไทย",
            for_resident: "รับทำใบต่างชาติ",
            for_nationality: "รับทำเปลี่ยน/พิสูจน์สัญชาติ",
            for_workpermit: "รับทำใบอนุญาตทำงาน",
            for_labor: "วีซ่าและใบอนุญาตทำงาน (พม่า, ลาว, กัมพูชา)",
            peak_signin_button: "Log in PEAK",
            hero_title: "มืออาชีพด้านบัญชีและกฎหมายครบวงจร",
            hero_subtitle: "เราคือผู้ช่วยที่เชื่อถือได้สำหรับธุรกิจของคุณ ตั้งแต่การจดทะเบียนบริษัท ดูแลบัญชี ไปจนถึงการให้คำปรึกษาด้านกฎหมาย",
            hero_button: "ดูบริการของเรา",
            services_title: "บริการของเรา",
            service_law_desc: "รับปรึกษาคดีความ, จัดการมรดก, ทำสัญญา, ว่าความทั่วราชอาณาจักร และจดทะเบียนต่างๆ",
            service_foreigner_desc: "รับทำวีซ่า, ใบต่างชาติ, เปลี่ยนสัญชาติ, ใบอนุญาตทำงาน สำหรับชาวต่างชาติและแรงงาน",
            service_registration_title: "จดทะเบียนธุรกิจ",
            service_registration_desc: "บริการจดทะเบียนธุรกิจทุกประเภท, VAT, ประกันสังคม, ใบอนุญาตนำเข้า, อย. และอื่นๆ",
            service_consulting_desc: "วางแผนภาษีสำหรับบุคคลและนิติบุคคล และให้คำปรึกษาปัญหาจากการดำเนินธุรกิจ",
            service_translation_title: "งานแปลเอกสาร",
            service_translation_desc: "บริการแปลเอกสารและจัดหาล่ามแปลภาษา กรุณาติดต่อเราเพื่อสอบถามรายละเอียดเพิ่มเติม",
            service_accounting_desc: "รับทำบัญชี ปิดงบการเงิน ตรวจสอบบัญชี ยื่นแบบภาษี และให้คำปรึกษาปัญหาทางบัญชี",
            peak_title: "ระบบบัญชีออนไลน์",
            peak_link_text: "เข้าสู่ระบบบัญชีออนไลน์",
            gov_links_title: "ลิงก์หน่วยงานราชการ",
            announcements_title: "ประกาศและข่าวสาร",
            announcements_desc: "ส่วนนี้สำหรับประกาศจากกรมพัฒนาธุรกิจการค้า, กรมสรรพากร, สำนักงานประกันสังคม, และสำนักงานตรวจคนเข้าเมือง (เนื้อหาภาษาไทยเท่านั้น)",
            about_title: "เกี่ยวกับเรา",
            about_desc: "เราเป็นบริษัทที่ปรึกษาระดับโลกที่กำลังเติบโต ธุรกิจของเราคือช่วยให้บริษัทเพิ่มมูลค่าและความปลอดภัย เราก่อตั้งขึ้นในปี 2559 บนหลักการที่ว่า ลูกค้าควรได้รับผลประโยชน์สูงสุด และความพึงพอใจสูงสุดจากที่ปรึกษาของเรา บริษัทยังคงพัฒนาศักยภาพของการบริการให้คำปรึกษาโดยรวมอย่างแข็งขัน และเติบโตเพื่อให้บริการระดับมืออาชีพในด้านกฎหมาย การบัญชี และการวางแผนทางการเงิน",
            contact_title: "ติดต่อเรา",
            location_title: "ที่ตั้งสำนักงาน",
            contact_info_title: "ข้อมูลการติดต่อ",
            contact_address: "90/42 Plex Bangna<br>ตำบลบางแก้ว อำเภอบางพลี<br>จังหวัดสมุทรปราการ 10540 ประเทศไทย",
            contact_tel_label: "โทร:",
            contact_email_label: "อีเมล:",
            form_choice_quotation: "ขอใบเสนอราคา",
            form_choice_meeting: "นัดประชุมออนไลน์",
            form_choice_individual: "บุคคล",
            form_choice_corporate: "นิติบุคคล",
            form_label_occupation: "อาชีพ",
            form_label_fullname: "ชื่อ-นามสกุล",
            form_label_country: "ประเทศที่ทำงาน",
            form_label_phone: "เบอร์โทรศัพท์ที่ติดต่อได้",
            form_label_email: "อีเมล์ที่ติดต่อได้",
            form_label_service: "บริการที่สนใจ",
            form_label_lawyer: "ต้องการทนายความหรือไม่",
            form_disclaimer_lawyer: "(หากท่านเลือกจะมีค่าบริการเพิ่มเติมและต้องชำระเงินก่อนวันนัดหมาย)",
            form_label_company: "ชื่อกิจการ",
            form_label_position: "ตำแหน่งงาน",
            form_label_biztype: "ประเภทธุรกิจ",
            form_label_meeting_times: "กรุณาเลือกสี่ช่วงเวลาที่ท่านสะดวกประชุมออนไลน์",
            form_button: "ส่งข้อมูล",
            alert_quotation_success: "เราได้รับข้อมูลของท่านแล้ว กรุณารอการตอบกลับทางอีเมล หรือเบอร์มือถือที่ท่านแนบมา",
            alert_meeting_success: "เราได้รับข้อมูลของท่านแล้ว กรุณารอการตอบกลับทางอีเมลที่ท่านแนบมา",
            footer_text: "© 2025 PTL Achievement. สงวนลิขสิทธิ์.",
            optgroup_consulting: "งานที่ปรึกษา",
            optgroup_law: "งานกฎหมาย",
            optgroup_accounting: "งานบัญชี",
            optgroup_foreigner: "งานคนต่างชาติ",
            form_select_default: "--- กรุณาเลือกบริการ ---"
        },
        en: {
            site_title: "Accounting & Legal Consulting - PTL Achievement",
            site_description: "One-stop services for accounting, tax, legal, and company registration.",
            company_name: "PTL Achievement",
            nav_home: "Home",
            nav_consulting: "Consulting Services",
            nav_law: "Laws & Attorneys",
            nav_accounting: "Accounting Services",
            nav_foreigner: "Foreigner Services",
            nav_about: "About",
            nav_contact: "Contact Us",
            b_reg_partnership: "Partnership Limited/Company Limited",
            b_reg_foreign: "Foreign Business",
            b_reg_boi: "BOI",
            b_reg_rep: "Representative Office",
            b_reg_jv: "Joint Venture/Consortium",
            b_reg_personal: "Personal shop",
            b_reg_vat: "VAT Registrations",
            b_reg_rd: "Other Registrations of Revenue Dept.",
            b_reg_sso: "Social Security Office Registrations",
            b_reg_customs: "CUSTOMS Paperless",
            b_reg_fda: "FDA and FDA Import License",
            b_reg_other: "Other Business Registrations",
            b_consult_problem: "Business Problem Consulting",
            law_consulting: "Litigation, Mediation, Contracts & Agreements",
            law_contract_drafting: "Contract Drafting & Interpretation",
            law_litigation: "Kingdom-wide Litigation",
            law_registration: "Business & License Registration",
            law_estate: "Estate Management",
            acc_closing: "Bookkeeping, Closing, Audit & Tax Filing",
            acc_monthly_tax: "Monthly Tax Accounting Services",
            acc_monthly_report: "Monthly Accounting & Financial Reporting",
            acc_consulting: "Accounting Problem Consulting",
            for_visa: "VISA application for foreigners in Thailand",
            for_resident: "Resident permit application",
            for_nationality: "Nationality change/proof services",
            for_workpermit: "Work permit application",
            for_labor: "VISA & Work permit (Myanmar, Laos, Cambodia)",
            peak_signin_button: "Sign in to PEAK",
            hero_title: "All-in-One Professional Accounting & Legal Services",
            hero_subtitle: "Your trusted partner for business needs, from company registration and accounting to legal advisory.",
            hero_button: "Explore Our Services",
            services_title: "Our Services",
            service_accounting_desc: "Accounting, financial statement closing, auditing, tax filing, and accounting consulting.",
            service_law_desc: "Litigation consulting, estate management, contract drafting, kingdom-wide litigation, and various registrations.",
            service_foreigner_desc: "Visa services, alien permits, nationality changes, and work permits for foreigners and laborers.",
            service_registration_title: "Business Registration",
            service_registration_desc: "All types of business registration services, including VAT, social security, import licenses, FDA, and more.",
            service_consulting_desc: "Tax planning for individuals and corporations, and consulting on business operation problems.",
            service_translation_title: "Translation Services",
            service_translation_desc: "Document translation and interpreter services. Please contact us for more details.",
            peak_title: "Online Accounting",
            peak_link_text: "Log in to accounting online",
            gov_links_title: "Government Agency Links",
            announcements_title: "Announcements & News",
            announcements_desc: "This section is for announcements from the Department of Business Development, Revenue Department, Social Security Office, and Immigration Bureau (Thai language content only).",
            about_title: "About Us",
            about_desc: "We are a growing global consulting firm. Our business is to help companies increase their value and security. We were founded in 2016 on the principle that clients should receive the maximum result and satisfaction our consultants offer. The Company actively continues to develop the potential of the overall consulting services and has grown to offer professional service in Law, Accounting and Financial Planning.",
            contact_title: "Contact Us",
            location_title: "Office Location",
            contact_info_title: "Contact Information",
            contact_address: "90/42 Plex Bangna<br>Bang Kaeo, Bang Phli<br>Samut Prakan 10540 Thailand",
            contact_tel_label: "Tel:",
            contact_email_label: "Email:",
            form_choice_quotation: "Request Quotation",
            form_choice_meeting: "Schedule Online Meeting",
            form_choice_individual: "Individual",
            form_choice_corporate: "Corporate",
            form_label_occupation: "Occupation",
            form_label_fullname: "Full Name",
            form_label_country: "Country of work place",
            form_label_phone: "Mobile No.",
            form_label_email: "E-mail",
            form_label_service: "Service of Interest",
            form_label_lawyer: "Need a lawyer?",
            form_disclaimer_lawyer: "(If you select this option, additional fees will apply and must be paid before the appointment.)",
            form_label_company: "Company or Business name",
            form_label_position: "Position",
            form_label_biztype: "Business Type",
            form_label_meeting_times: "Please select four convenient time slots for the online meeting",
            form_button: "Submit",
            alert_quotation_success: "We have received your information and will get back to you via email or the mobile number you provided.",
            alert_meeting_success: "We have received your information. Please wait for a response via the email you provided.",
            footer_text: "© 2025 PTL Achievement. All Rights Reserved.",
            optgroup_consulting: "Consulting Services",
            optgroup_law: "Laws & Attorneys",
            optgroup_accounting: "Accounting Services",
            optgroup_foreigner: "Foreigner Services",
            form_select_default: "--- Please select a service ---"
        }
    };

    // --- Language Translation ---
    const setLanguage = (lang) => {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                if (element.tagName === 'TITLE') {
                    element.textContent = translations[lang][key];
                } else if (element.tagName === 'META' && element.name === 'description') {
                    element.content = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    };

    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = button.dataset.lang;
            setLanguage(selectedLang);
            populateDropdowns(); // Re-populate dropdowns after language change
        });
    });


    // --- Mobile Navigation ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = nav.querySelectorAll('a');

    const toggleNav = () => {
        const isActive = nav.classList.toggle('nav-active');
        burger.querySelector('i').classList.toggle('fa-bars', !isActive);
        burger.querySelector('i').classList.toggle('fa-times', isActive);
        document.body.classList.toggle('no-scroll', isActive);
    };

    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNav();
    });

    // Close nav when a link is clicked
    navLinks.forEach(link => {
        // Handle dropdown clicks on mobile
        if (link.parentElement.classList.contains('dropdown')) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 1100) {
                    e.preventDefault();
                    link.parentElement.classList.toggle('open');
                }
            });
        } else {
            // Handle regular link clicks
            link.addEventListener('click', () => {
                if (nav.classList.contains('nav-active')) {
                    toggleNav();
                }
            });
        }
    });

    // Close dropdowns when clicking sub-menu items
    nav.querySelectorAll('.dropdown-menu a').forEach(subLink => {
        subLink.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                toggleNav();
            }
        });
    });


    // --- Contact Form Logic ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxRrRyIn7P2VuqA3hEDBA9Zo9aYAcN0l3jpGlL9asJoSVK1Th0wHF7DQHz6HhRn0LZ6/exec";

        const btnShowQuotation = document.getElementById('btn-show-quotation');
        const btnShowMeeting = document.getElementById('btn-show-meeting');
        const quotationFields = document.getElementById('quotation-fields');
        const meetingFields = document.getElementById('meeting-fields');

        const btnShowIndividual = document.getElementById('btn-show-individual');
        const btnShowCorporate = document.getElementById('btn-show-corporate');
        const individualFormFields = document.getElementById('individual-form-fields');
        const corporateFormFields = document.getElementById('corporate-form-fields');

        const setRequired = (fieldset, isRequired) => {
            fieldset.querySelectorAll('input, select').forEach(input => {
                const requiredFields = ['fullname', 'email', 'service', 'meeting_time_1'];
                if (requiredFields.includes(input.name) || (isRequired && input.type !== 'tel' && input.type !== 'checkbox')) {
                    input.required = isRequired;
                }
            });
        };

        const updateFormView = (mode) => {
            if (mode === 'quotation') {
                btnShowQuotation.classList.add('active');
                btnShowMeeting.classList.remove('active');
                quotationFields.classList.remove('hidden');
                meetingFields.classList.add('hidden');
                setRequired(meetingFields, false);
                updateQuotationView(btnShowIndividual.classList.contains('active') ? 'individual' : 'corporate');
            } else { // mode === 'meeting'
                btnShowQuotation.classList.remove('active');
                btnShowMeeting.classList.add('active');
                quotationFields.classList.add('hidden');
                meetingFields.classList.remove('hidden');
                setRequired(individualFormFields, false);
                setRequired(corporateFormFields, false);
                setRequired(meetingFields, true);
            }
        };

        const updateQuotationView = (mode) => {
            if (mode === 'individual') {
                btnShowIndividual.classList.add('active');
                btnShowCorporate.classList.remove('active');
                individualFormFields.classList.remove('hidden');
                corporateFormFields.classList.add('hidden');
                setRequired(individualFormFields, true);
                setRequired(corporateFormFields, false);
            } else { // mode === 'corporate'
                btnShowIndividual.classList.remove('active');
                btnShowCorporate.classList.add('active');
                individualFormFields.classList.add('hidden');
                corporateFormFields.classList.remove('hidden');
                setRequired(individualFormFields, false);
                setRequired(corporateFormFields, true);
            }
        };

        btnShowQuotation.addEventListener('click', () => updateFormView('quotation'));
        btnShowMeeting.addEventListener('click', () => updateFormView('meeting'));
        btnShowIndividual.addEventListener('click', () => updateQuotationView('individual'));
        btnShowCorporate.addEventListener('click', () => updateQuotationView('corporate'));

        // Initial setup
        updateFormView('quotation');
    }

    const populateDropdowns = () => {
        const currentLang = localStorage.getItem('language') || 'th';
        const serviceDropdowns = document.querySelectorAll('#individual-service, #corporate-service, #meeting-service');
        const services = {
            "optgroup_consulting": ["b_reg_partnership", "b_reg_foreign", "b_reg_boi", "b_reg_rep", "b_reg_jv", "b_reg_personal", "b_reg_vat", "b_reg_rd", "b_reg_sso", "b_reg_customs", "b_reg_fda", "b_reg_other"],
            "optgroup_law": ["law_consulting", "law_contract_drafting", "law_litigation", "law_registration", "law_estate"],
            "optgroup_accounting": ["acc_closing", "acc_monthly_tax", "acc_monthly_report", "acc_consulting"],
            "optgroup_foreigner": ["for_visa", "for_resident", "for_nationality", "for_workpermit", "for_labor"]
        };

        serviceDropdowns.forEach(dropdown => {
            if (dropdown) {
                dropdown.innerHTML = ''; // Clear existing options

                // Add placeholder
                const placeholder = document.createElement('option');
                placeholder.value = "";
                placeholder.textContent = translations[currentLang].form_select_default;
                placeholder.disabled = true;
                placeholder.selected = true;
                dropdown.appendChild(placeholder);

                // Add service options
                for (const groupKey in services) {
                    const optgroup = document.createElement('optgroup');
                    optgroup.label = translations[currentLang][groupKey];
                    services[groupKey].forEach(serviceKey => {
                        const option = document.createElement('option');
                        option.value = serviceKey;
                        option.textContent = translations[currentLang][serviceKey];
                        optgroup.appendChild(option);
                    });
                    dropdown.appendChild(optgroup);
                }
            }
        });
    };

    // --- Initial Load ---
    const savedLang = localStorage.getItem('language') || 'th';
    setLanguage(savedLang);
    populateDropdowns();

    // Form submission (same as before)
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target;
            const submitButton = form.querySelector('button[type="submit"]');
            const currentLang = localStorage.getItem('language') || 'th';
            const isMeetingRequest = !meetingFields.classList.contains('hidden');

            const originalButtonText = translations[currentLang].form_button;
            submitButton.disabled = true;
            submitButton.textContent = currentLang === 'th' ? 'กำลังส่ง...' : 'Sending...';

            const data = {};

            if (isMeetingRequest) {
                data.form_type = 'Online Meeting Request';
                const serviceDropdown = document.getElementById('meeting-service');
                const selectedOption = serviceDropdown.options[serviceDropdown.selectedIndex];
                data.service = selectedOption.value ? translations[currentLang][selectedOption.value] : '';
                data.fullname = document.getElementById('meeting-name').value;
                data.email = document.getElementById('meeting-email').value;
                data.phone = document.getElementById('meeting-phone').value;
                data.meeting_time_1 = form.querySelector('[name="meeting_time_1"]').value;
                data.meeting_time_2 = form.querySelector('[name="meeting_time_2"]').value;
                data.meeting_time_3 = form.querySelector('[name="meeting_time_3"]').value;
                data.meeting_time_4 = form.querySelector('[name="meeting_time_4"]').value;
            } else {
                const isIndividual = !individualFormFields.classList.contains('hidden');
                if (isIndividual) {
                    data.form_type = 'Quotation Request (Individual)';
                    data.occupation = document.getElementById('individual-occupation').value;
                    data.fullname = document.getElementById('individual-name').value;
                    data.country = document.getElementById('individual-country').value;
                    data.phone = document.getElementById('individual-phone').value;
                    data.email = document.getElementById('individual-email').value;
                    const serviceDropdown = document.getElementById('individual-service');
                    const selectedOption = serviceDropdown.options[serviceDropdown.selectedIndex];
                    data.service = selectedOption.value ? translations[currentLang][selectedOption.value] : '';
                    data.lawyer_needed = document.getElementById('individual-lawyer').checked ? 'yes' : 'no';
                } else { // Corporate
                    data.form_type = 'Quotation Request (Corporate)';
                    data.company_name = document.getElementById('corporate-company').value;
                    data.fullname = document.getElementById('corporate-name').value;
                    data.position = document.getElementById('corporate-position').value;
                    data.business_type = document.getElementById('corporate-biztype').value;
                    data.country = document.getElementById('corporate-country').value;
                    data.phone = document.getElementById('corporate-phone').value;
                    data.email = document.getElementById('corporate-email').value;
                    const serviceDropdown = document.getElementById('corporate-service');
                    const selectedOption = serviceDropdown.options[serviceDropdown.selectedIndex];
                    data.service = selectedOption.value ? translations[currentLang][selectedOption.value] : '';
                    data.lawyer_needed = document.getElementById('corporate-lawyer').checked ? 'yes' : 'no';
                }
            }

            fetch(form.parentElement.querySelector('#SCRIPT_URL').value, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(() => {
                    const successMsg = isMeetingRequest
                        ? translations[currentLang].alert_meeting_success
                        : translations[currentLang].alert_quotation_success;
                    alert(successMsg);
                    form.reset();
                    updateFormView('quotation');
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert(currentLang === 'th' ? 'เกิดข้อผิดพลาดในการส่งข้อมูล' : 'There was a problem with your submission.');
                })
                .finally(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                });
        });
    }
});

