import img from '../Image/img.jpg'
import { useState } from 'react'

function Todo() {
    const [inputData, setinputData] = useState('')
    const [item, setitem] = useState([])

    function additem() {
        if(!inputData){

        }
        else{
setitem([...item, inputData])
 setinputData('')
        }
    }


    function removeItem(id) {
        const filtredArray = item.filter((task, ind) => {
            console.log(id);
            return ind !== id
        })

        setitem(filtredArray)
    }

    function removeall() {
        setitem([])
    }

    return (

        <div className=" flex flex-col items-center ">
            <div className="flex flex-col items-center justify-center my-5">
                <img src={img} alt="note-img" className="rounded-xl" />

                <h3 className="text-stone-200 my-3">
                    Create your Todo List.....
                </h3>
                <div className='Input_container flex  justify-between  my-4'>
                    <input type='text' placeholder='Write something..' className='Input py-2 px-2 '
                        value={inputData} onChange={(e) =>
                            setinputData(e.target.value)} ></input>
                    <button className='add_btn  rounded-xl py-2 px-4 bg-slate-400 border-none'
                        onClick={additem}>Add</button>
                </div>
                <div className='Each-item-container'>
                    {
                        item.map((elem, ind) => {
                            return (
                                <div className='Item_container' key={ind}>
                                    <h3 className='heading bg-slate-400  py-2 px-2'>{elem}</h3>
                                    <button className='add_btn  rounded-xl bg-slate-400 border-none py-2 px-2 '
                                        onClick={() => removeItem(ind)}>Remove</button></div>


                            )
                        })

                    }
                </div>


                <div className='Each-item-container'>
                    <button className='check-btn rounded-xl bg-slate-400 border-none py-2 px-2' onClick={removeall} > Check List</button>

                </div>

                <div>

                </div>
            </div>

        </div>
    )
}

export default Todo



{/* <div className='Item_container'>
                        <h3 className='heading bg-slate-400  py-2 px-2'>Mango</h3 >
                        <button className='add_btn  rounded-xl bg-slate-400 border-none py-2 px-2' >Remove</button>
                    </div> */}