import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a={email:"",message:""};if(localStorage.getItem("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));a.email=e.email,a.message=e.message,document.querySelector('input[name="email"]').value=e.email,document.querySelector('textarea[name="message"]').value=e.message}document.querySelector(".feedback-form").addEventListener("input",e=>{(e.target.type==="email"||e.target.tagName.toLowerCase()==="textarea")&&(a[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(a)))});document.querySelector(".feedback-form").addEventListener("submit",e=>{e.preventDefault(),a.email&&a.message?(console.log(a),localStorage.removeItem("feedback-form-state"),document.querySelector('input[name="email"]').value="",document.querySelector('textarea[name="message"]').value=""):alert("Будь ласка заповніть всі поля")});
//# sourceMappingURL=commonHelpers2.js.map
