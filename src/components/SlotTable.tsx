import React from 'react'
import tw from 'twin.macro'
function SlotTable() {
  return (
    <Container>
        <div className="relative overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="bg-gray-50">
            <tr>
              <TableTh>Город</TableTh>
              <TableTh>Адрес</TableTh>
              <TableTh>Время сдачи</TableTh>
              <TableTh>Кол-во мест</TableTh>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <TableTd>Нур-Султан</TableTd>
              <TableTd>Тауелсиздик 52, Дворец независимости</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>15/15</TableTd>
            </tr>
            <tr>
              <TableTd>Алматы</TableTd>
              <TableTd>роспект Аль-Фараби, 71</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>25/25</TableTd>
            </tr>
            <tr>
              <TableTd>Костанай</TableTd>
              <TableTd>Тул.Тәеулсіздік 118, французский культурный центр,2 этаж</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>25/25</TableTd>
            </tr>
            <tr>
              <TableTd>Петропавловск</TableTd>
              <TableTd>ул. Конституции Казахстана, 60</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>25/25</TableTd>
            </tr>
            <tr>
              <TableTd>Актобе</TableTd>
              <TableTd>Алматинский р-н, ул.Арынова 1</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>25/25</TableTd>
            </tr>
            <tr>
              <TableTd>Павлодар</TableTd>
              <TableTd>ул.Толстого 99</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>25/25</TableTd>
            </tr>
            <tr>
              <TableTd>Атырау</TableTd>
              <TableTd>ул. Баймуханова, 45а, АИНГ</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>25/25</TableTd>
            </tr>
            <tr>
              <TableTd>Тараз</TableTd>
              <TableTd>Тауке хана 24</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>25/25</TableTd>
            </tr>
            <tr>
              <TableTd>Шымкент</TableTd>
              <TableTd>улица 8 марта, 22</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>25/25</TableTd>
            </tr>
            <tr>
              <TableTd>Караганда</TableTd>
              <TableTd>Ул.Казахстанская 15А</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>20/20</TableTd>
            </tr>
            <tr>
              <TableTd>Актау</TableTd>
              <TableTd>15-й микрорайон, 31 (IT мектеп-лицей вход с торца, левое крыло)</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>25/25</TableTd>
            </tr>
            <tr>
              <TableTd>Уральск</TableTd>
              <TableTd>ТЦ "Форум", 4 этаж, ул. Ж. Молдагалиева 18</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>20/20</TableTd>
            </tr>
            <tr>
              <TableTd>Туркестан</TableTd>
              <TableTd>162 квартал. Дворец школьников</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>25/25</TableTd>
            </tr>
            <tr>
              <TableTd>Кызылорда</TableTd>
              <TableTd>ул Тажибаева,18а</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>25/25</TableTd>
            </tr>
            <tr>
              <TableTd>Усть-Каменогорск</TableTd>
              <TableTd>Н.Назарбаева 86/2 (КАСУ)</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>25/25</TableTd>
            </tr>
            <tr>
              <TableTd>Семей</TableTd>
              <TableTd>Турлыханова 30</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>25/25</TableTd>
            </tr>
            <tr>
              <TableTd>Талдыкорган</TableTd>
              <TableTd>Северно-западный жилой район ул.Қабанбай батыра 180 (25 школа)</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>25/25</TableTd>
            </tr>
            <tr>
              <TableTd>Кокшетау</TableTd>
              <TableTd>ул. Акана-серэ, 24</TableTd>
              <TableTd>10:00/15:00	</TableTd>
              <TableTd>25/25</TableTd>
            </tr>
          </tbody>
        </table>
        </div>
      </Container>
  )
}
const Container = tw.div`container mx-auto`
const TableTh = tw.th`px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase`;
const TableTd = tw.td`px-6 py-4 text-sm text-gray-800 whitespace-nowrap`;
export default SlotTable