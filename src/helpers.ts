export const convertToFormData = (data:any, formdata:any) => {
    Object.keys(data).forEach(el =>{
        formdata.append(el, data[el])
    })
}