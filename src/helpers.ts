export const convertToFormData = (data:any, formdata:any) => {
    Object.keys(data).forEach(el =>{
        if((typeof data[el] === 'object') && data[el].length){
            formdata.append(el, data[el][0])
        }else if(data[el].length !== 0){
            formdata.append(el, data[el])
        }
    })
}