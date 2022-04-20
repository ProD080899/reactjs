import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './compoment/header'

function App() {

const [sinhVien , setSinhvien]  = useState([
  {name: 'Nguyen Van A', diemThi:{toan:8,ly:6,hoa:7,anh:5,van:7}, khoiThi:'A'}, 
    {name: 'Lai Van B', diemThi:{toan:7,ly:8,hoa:7,anh:7,van:7}, khoiThi:'D'}, 
    {name: 'NGuyen Viet HUng', diemThi:{toan:8,ly:6,hoa:7,anh:8,van:7}, khoiThi:'A1'}, 
    {name: 'Dao van tam', diemThi:{toan:8,ly:8,hoa:4,anh:5,van:7}, khoiThi:'A'}, 
    {name: 'Nguyen the tao', diemThi:{toan:9,ly:6,hoa:8,anh:5,van:7}, khoiThi:'D'}, 
])

let khoiThi = [
    {tenKhoi:'A', diemSan:24},
    {tenKhoi:'A1', diemSan:25},
    {tenKhoi:'D', diemSan:25}
]
function del(i){
  sinhVien.splice(i,1)
  setSinhvien([...sinhVien])
}  
function update(i){
let name = document.querySelector(".name").value
let toan = document.querySelector(".toan").value
let ly = document.querySelector(".ly").value
let hoa = document.querySelector(".hoa").value
let anh = document.querySelector(".anh").value
let van = document.querySelector(".van").value
let khoiThi = document.querySelector(".khoiThi").value
sinhVien[i].name = name
sinhVien[i].diemThi.toan = toan
sinhVien[i].diemThi.ly = ly
sinhVien[i].diemThi.hoa = hoa
sinhVien[i].diemThi.anh = anh
sinhVien[i].diemThi.van = van
sinhVien[i].khoiThi = khoiThi
setSinhvien([...sinhVien])


}  



  return (
    
 
    <div className="app">
  <Header/>
  <div className="wrap-tong">
    <table>
      <tr>
          <td>Name</td>
          <td>diemThi Toan</td>
          <td>diemThi ly</td>
          <td>diemThi hoa</td>
          <td>diemThi anh</td>
           <td>diemThi van</td>
           <td>Khoi thi</td>

        </tr>

  {
    sinhVien.map((val,i)=>{
      return(
        <tr>
          <td>{val.name}</td>
          <td>{val.diemThi.toan}</td>
          <td>{val.diemThi.ly}</td>
          <td>{val.diemThi.hoa}</td>
          <td>{val.diemThi.anh}</td>
        <td>{val.diemThi.van}</td>
        <td>{val.khoiThi}</td>
        <td><button onClick={()=>{del(i)}}>X</button></td>
         <td><button onClick={()=>{update(i)}}>O</button></td>
        </tr>
      )
    })
   
  }
    </table>
    

<div className="inputAdd">
    <input type="text"  className='name'/>
    <input type="text"  className='toan'/>
      <input type="text"  className='ly'/>
        <input type="text"  className='hoa'/>
          <input type="text"  className='anh'/>
            <input type="text"  className='van'/>
              <input type="text"  className='khoiThi'/>

</div>
  </div>
 
    </div>

  );
}

export default App;
