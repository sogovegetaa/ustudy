import React, { useRef, useState } from "react";
import Header from "../../../../components/Header";
import tw from "twin.macro";
import SlotTable from "../../../../components/SlotTable";
import Footer from "../../../../components/Footer";
import axios from "axios";
import { useForm } from "react-hook-form";
import { convertToFormData } from "../../../../helpers";

export interface RootObject {
  fio: string;
  region: string;
  iin: string;
  tests: string;
  report_date: string;
  report_time: string;
  payment_check: string | null;
  udostoverenie: string | null;
  email: string;
  number: string;
  sex: string;
  country: string;
}
type Props = {
  postData: RootObject[];
};
function Linguaskill() {
  const { register, handleSubmit, formState } = useForm();
  const [table, setTable] = useState(true);
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);
  const [selectedUdas, setSelectedUdas] = useState<any>();
  const [pdfLink, setPdfLink] = useState("")
  const inputFiles = useRef<any>() 
  const [sendBtn, setSendBtn] = useState(true);
  const [selectedCheck, setSelectedCheck] = useState<
    (EventTarget & HTMLInputElement) | undefined
  >();
  const Tdate = String(new Date());
  const url = "https://arioapi.pythonanywhere.com/u-api/international/";
  const mockUrl = "https://63765481b5f0e1eb85090bc9.mockapi.io/posts";
  const [data, setData] = useState<RootObject>({
    fio: "",
    region: "",
    iin: "",
    report_date: "",
    report_time: "",
    email: "",
    tests: "",
    payment_check: null,
    number: "",
    udostoverenie: null,
    sex: "",
    country: "",
  });
  
  function submit(data: any) {
    const formData = new FormData();
    formData.append("tests", "Linguaskill")
    convertToFormData(data, formData);
    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        setSend(true);
        setTimeout(() => {
          setSend(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err.message);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      });
  }
  function sendval() {
    setSendBtn(false);
    setTimeout(() => setSendBtn(true), 2000);
  }
  console.log(formState.errors);
  return (
    <div className="debug-screens">
      <Header />
      {send && (
        <div
          className="fixed p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg top-5 right-5 shadow-xl z-[51]"
          role="alert"
        >
          <span className="font-medium">Заявка отправлена!</span>
        </div>
      )}

      {error && (
        <div
          className="fixed p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg top-5 right-5 shadow-xl z-[51]"
          role="alert"
        >
          <span className="font-medium">
            Ошибка! Заявка не отправлена, попробуйте позже.
          </span>
        </div>
      )}

      <Container>
        <div
          className="flex items-center bg-[#30AAE2] text-white text-md font-bold px-4 py-3 mb-8 "
          role="alert"
        >
          <svg
            className="w-4 h-4 mr-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"></path>
          </svg>
          <p>
            Ниже приведена таблица с адресами и временем сдачи для тестов. Выбор
            желаемого адреса и времени доступен при заполнении формы
            регистрации.
          </p>
        </div>
        <div className="flex justify-center my-7">
          <ButtonTable onClick={() => setTable(!table)}>
            {table ? "Свернуть таблицу" : "Показать таблицу"}
          </ButtonTable>
        </div>
        {table && (
          <div className="px-4 py-4 my-6 border border-gray-200">
            <SlotTable />
          </div>
        )}
      </Container>

      <Container>
        <div className="flex justify-center">
          <form className="w-full" onSubmit={handleSubmit(submit)}>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <LabelField htmlFor="fio">ФИО</LabelField>
                <TextField
                  id="fio"
                  type="text"
                  placeholder="Введите ФИО"
                  {...register("fio")}
                  required
                />
              </div>
              <div className="w-full px-3 md:w-1/3">
                <LabelField htmlFor="region">Регион</LabelField>
                <div className="relative">
                <SelectField id="region" {...register("region")} required>
                    <option value="" selected>
                      Выберите регион
                    </option>
                    <option value="Алматинская область">Алматинская область</option>
                    <option value="Восточно-Казахстанская область">Восточно-Казахстанская область</option>
                    <option value="Карагандинская область">Карагандинская область</option>
                    <option value="Жамбылская область">Жамбылская область</option>
                    <option value="Южно-Казахстанская область">Южно-Казахстанская область</option>
                    <option value="Кызылординская область">Кызылординская область</option>
                    <option value="Актюбинская область">Актюбинская область</option>
                    <option value="Костанайская область">Костанайская область</option>
                    <option value="Северо-Казахстанская область">Северо-Казахстанская область</option>
                    <option value="Акмолинская область">Акмолинская область</option>
                    <option value="Павлодарская область">Павлодарская область</option>
                    <option value="Западно-Казахстанская область">Западно-Казахстанская область</option>
                    <option value="Атырауская область">Атырауская область</option>
                    <option value="Мангистауская область">Мангистауская область</option>
                  </SelectField>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                  </div>
              </div>
              <div className="w-full px-3 md:w-1/3">
                <LabelField htmlFor="iin">ИИН</LabelField>
                <TextField
                  id="iin"
                  type="text"
                  placeholder="Введите ИИН"
                  {...register("iin")}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <LabelField htmlFor="report_date">Дата сдачи</LabelField>
                <TextField
                  id="report_date"
                  type="date"
                  {...register("report_date")}
                />
              </div>
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <LabelField htmlFor="email">E-mail</LabelField>
                <TextField
                  id="email"
                  type="email"
                  placeholder="Введите электронную почту"
                  {...register("email")}
                  
                />
              </div>
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <LabelField htmlFor="report_time">
                  Выберите время сдачи
                </LabelField>
                <div className="relative">
                  <SelectField id="report_time" {...register("report_time")}>
                    <option value="" selected>
                      Выберите время
                    </option>
                    <option value="10:00">10:00</option>
                    <option value="15:00">15:00</option>
                  </SelectField>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <LabelField htmlFor="sex">Выберите пол</LabelField>
                <div className="relative">
                  <SelectField id="sex" {...register("sex")}>
                    <option value="" selected>
                      Выберите пол
                    </option>
                    <option value="Мужчина">Мужской</option>
                    <option value="Женщина">Женский</option>
                  </SelectField>

                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <LabelField htmlFor="country">Гражданство</LabelField>
                <TextField
                  id="country"
                  type="text"
                  placeholder="Введите гранжданство"
                  {...register("country")}
                />
              </div>
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <LabelField htmlFor="number">Номер телефона</LabelField>
                <TextField
                  id="number"
                  type="text"
                  placeholder="+7(___)___-__-__"
                  {...register("number")}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
              <div>
                <LabelField htmlFor="payment_check">Чек o6 оплате</LabelField>
                <FileField
                  id="payment_check"
                  type="file"
                  {...register("payment_check")}
                />
              </div>
              <div>
                <LabelField htmlFor="udostoverenie">
                  Удостоверение личности
                </LabelField>
                <FileField
                  id="udostoverenie"
                  type="file"
                  {...register("udostoverenie")}
                />
              </div>
            </div>
            <div className="w-full my-12">
              <ButtonTable type="submit">
                <div onClick={sendval}>
                  {sendBtn ? <p>Отправить</p> : <p>Идет отправка</p>}
                </div>
              </ButtonTable>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
const AlertWindow = tw.div`bg-green-500 fixed top-5 right-5 w-[250px] z-[51] p-5 rounded-lg shadow-xl text-xl font-bold text-center`;
const ErrorAlertWindow = tw.div`bg-red-500 fixed top-5 right-5 w-[250px] z-[51] p-5 rounded-lg shadow-xl text-lg font-bold text-center`;
const Container = tw.div`container mx-auto`;
const TextField = tw.input`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`;
const LabelField = tw.label`block uppercase tracking-wide text-gray-700 text-base font-bold mb-2`;
const SelectField = tw.select` block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`;
const FileField = tw.input`border-2 border-[#30AAE2] border-dashed xl:p-8 lg:p-4 xl:w-full lg:w-11/12 md:p-4 md:w-full sm:p-5 sm:w-full`;
const ButtonTable = tw.button`bg-[#30AAE2] py-[16px] cursor-pointer px-[27px] rounded-xl text-white hover:bg-white border border-[#30AAE2] hover:text-[#30AAE2] duration-200 shadow-2xl mr-8`;
export default Linguaskill;
