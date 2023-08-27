window.onload = function()
{
    if(localStorage)
    {
        populate();
        const form = document.getElementById('register');
        form.addEventListener('submit', store);
    }
    else
    {
        window.alert('localstorage is not supported');
    }
}

function store()
{
        let date = document.forms.personalinfo.date.value;
        let staffname = document.forms.personalinfo.staffname.value;
        let healthprovider = document.forms.personalinfo.healthprovider.value;
       /* let phone = document.forms.personalinfo.phone.value;
        let fullname = document.forms.personalinfo.fullname.value;
        let dob = document.forms.personalinfo.dob.value;
        let sex = document.forms.personalinfo.sex.value;
        let ethnicity = document.forms.personalinfo.ethnicity.value;
        let race = document.forms.personalinfo.race.value;
        let partners = document.forms.personalinfo.partners.value;
        let gtesttype = document.forms.personalinfo.gtesttype.value;
        let reason = document.forms.personalinfo.reason.value;
        let diagnosis = document.forms.personalinfo.diagnosis.value;
        let sites = document.forms.personalinfo.sites.value;*/

        localStorage.setItem('date', date);
        localStorage.setItem('staffname', staffname);
        localStorage.setItem('healthprovider', healthprovider);
       /* localStorage.setItem('phone', phone);
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('dob', dob);
        localStorage.setItem('sex', sex);
        localStorage.setItem('ethnicity', ethnicity);
        localStorage.setItem('race', race);
        localStorage.setItem('partners', partners);
        localStorage.setItem('gtesttype', gtesttype);
        localStorage.setItem('reason', reason);
        localStorage.setItem('diagnosis',diagnosis);
        localStorage.setItem("sites",sites);*/

}

function populate()
{
        let date = document.forms.personalinfo.date;
        let staffname = document.forms.personalinfo.staffname;
        let healthprovider = document.forms.personalinfo.healthprovider;
       /* let phone = document.forms.personalinfo.phone.value;
        let fullname = document.forms.personalinfo.fullname.value;
        let dob = document.forms.personalinfo.dob.value;
        let sex = document.forms.personalinfo.sex.value;
        let ethnicity = document.forms.personalinfo.ethnicity.value;
        let race = document.forms.personalinfo.race.value;
        let partners = document.forms.personalinfo.partners.value;
        let gtesttype = document.forms.personalinfo.gtesttype.value;
        let reason = document.forms.personalinfo.reason.value;
        let diagnosis = document.forms.personalinfo.diagnosis.value;
        let sites = document.forms.personalinfo.sites.value;*/

        if(localStorage.getItem('date')!=null)
        {
            date.value=localStorage.getItem('date');
        }
        if(localStorage.getItem('staffname')!=null)
        {
            date.value=localStorage.getItem('staffname');
        }
        if(localStorage.getItem('healthprovider')!=null)
        {
            date.value=localStorage.getItem('healthprovider');
        }
}