import React, { useState } from 'react'
function CreateArea(props) {
    var [item, updateItem] = useState({
        name: "",
        email: "",
        phone: "",
        dob: ""

    });
    var [age, setAge] = useState()
    var [length, setLength]=useState()
    function handleChange(e) {
        const { name, value } = e.target;
        if (name === 'dob') {
            const year = new Date().getFullYear()
            const ageYear = value.substring(0, 4);
            var val = year - parseInt(ageYear)
            setAge(() => val)

        }
        if(name==='name'){
            let val=value.length
            setLength(()=>val)
        }
        updateItem(prevItem => {
            return {
                ...prevItem,
                [name]: value
            }
        })
    }
    return (
        <div class="card card-5 col-6 left">
            <div class="card-heading">
                <h2 class="title">Enter Your Details</h2>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-row">
                        <div class="name">Name</div>
                        <div class="value">
                            <div class="input-group">
                                <input class="input--style-5" type="text" name="name" value={item.name} onChange={handleChange} required maxLength="20" minLength="3" />
                            </div>
                            <span>Length: {length}</span>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Email</div>
                        <div class="value">
                            <div class="input-group">
                                <input class="input--style-5" type="email" name="email" value={item.email} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="name">Phone</div>
                        <div class="value">
                            <div class="input-group">
                                <input class="input--style-5" type="text" name="phone" value={item.phone} onChange={handleChange} maxLength="10" />
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="name">DOB</div>
                        <div class="value">
                            <div class="input-group">
                                <input class="input--style-5" type="date" name="dob" value={item.dob} onChange={handleChange} />
                            </div>
                            <span>Age: {age}</span>
                        </div>
                    </div>

                    <button class="btn btn--radius-2 btn--red" type="submit btn-primary" onClick={(event) => {
                        var ok = false;
                        age>=18?ok=true:alert("Age less than 18")
                        length>=3&&length<=20?ok=true:alert("Enter Valid Name",ok=false);

                        ok && props.click(item)
                        ok&&updateItem(() => {
                            return {
                                name: "",
                                email: "",
                                phone: "",
                                dob: ""
                            }
                        });
                        ok&&setAge(() => '')
                        ok&&setLength(()=>'')
                        event.preventDefault();
                    }}>Register</button>
                </form>
            </div >
        </div>
    )
}

export default CreateArea

