

try
{
    function validatepersonalinfo()
    {
        let date = document.forms.personalinfo.date.value;
        let staffname = document.forms.personalinfo.staffname.value;
        let healthprovider = document.forms.personalinfo.healthprovider.value;
        let phone = document.forms.personalinfo.phone.value;
        let fullname = document.forms.personalinfo.fullname.value;
        let dob = document.forms.personalinfo.dob.value;
        let sex = document.forms.personalinfo.sex.value;
        let ethnicity = document.forms.personalinfo.ethnicity.value;
        let race = document.forms.personalinfo.race.value;
        let partners = document.forms.personalinfo.partners.value;
        let gtesttype = document.forms.personalinfo.gtesttype.value;
        let reason = document.forms.personalinfo.reason.value;
        let diagnosis = document.forms.personalinfo.diagnosis.value;
        let sites = document.forms.personalinfo.sites.value;

        if(!date)
        {
            document.getElementById('dateerr').innerHTML = "Date is required";
            document.forms.personalinfo.date.focus();
            return false;
        }

        if(!staffname)
        {
            document.getElementById('staffnameerr').innerHTML = "Staff name is required";
             document.forms.personalinfo.staffname.focus();
            return false;
        }
        if(!healthprovider)
        {
            document.getElementById('healthprovidererr').innerHTML = "Healthprovider name is required";
            document.forms.personalinfo.healthprovider.focus();
            return false;
        }
        if(!phone)
        {
            document.getElementById('phoneerr').innerHTML = "Phone no is required";
            document.forms.personalinfo.phone.focus();
            return false;
        }
        if(!fullname)
        {
            document.getElementById('fullnameerr').innerHTML = "Fullname is required";
            document.forms.personalinfo.fullname.focus();
            return false;
        }
        if(!dob)
        {
            document.getElementById('doberr').innerHTML = "Date of birth is required";
            document.forms.personalinfo.dob.focus();
            return false;
        }
        if(!sex)
        {
            document.getElementById('sexerr').innerHTML = "Gender is required";
            document.forms.personalinfo.sex.focus();
            return false;
        }
        if(!ethnicity)
        {
            document.getElementById('ethnicityerr').innerHTML = "Ethnicity is required";
            document.forms.personalinfo.ethnicity.focus();
            return false;
        }
        if(!race)
        {
            document.getElementById('raceerr').innerHTML = "Race is required";
            document.forms.personalinfo.race.focus();
            return false;
        }
        if(!partners)
        {
            document.getElementById('partnerserr').innerHTML = "Partners are required";
            document.forms.personalinfo.partners.focus();
            return false;
        }
        if(!gtesttype)
        {
            document.getElementById('gtesttypeerr').innerHTML = "Gonorrhea Positive Result is required";
            document.forms.personalinfo.gtesttype.focus();
            return false;
        }
        if(!reason)
        {
            document.getElementById('reasonerr').innerHTML = "Reason is required";
            document.forms.personalinfo.reason.focus();
            return false;
        }
        if(!diagnosis)
        {
            document.getElementById('diagnosiserr').innerHTML = "Diagnosis is required";
            document.forms.personalinfo.diagnosis.focus();
            return false;
        }
        if(!sites)
        {
            document.getElementById('siteserr').innerHTML = "Sites is required";
            document.forms.personalinfo.sites.focus();
            return false;
        }
    }


}
catch(err)
{
    window.alert(err.message);
}
