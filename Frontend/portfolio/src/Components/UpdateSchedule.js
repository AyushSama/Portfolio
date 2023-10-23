import React , {useState} from 'react'

export default function UpdateSchedule(props) {

    const [title , setTitle] = useState(props.title);
    const [venue, setVenue] = useState(props.venue);
    const [desc , setDesc] = useState(props.description);
    const [date ,setDate] = useState(props.date);

    const handleTitle = (event)=>{
        setTitle(event.target.value);
    }

    const handleVenue = (event)=>{
        setVenue(event.target.value);
    }

    const handleDesc = (event)=>{
        setDesc(event.target.value);
    }

    const handleDate = (event)=>{
        setDate(event.target.value);
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log(props._id);
        try {
            const id = props._id;
            const apiUrl = `http://localhost:5000/api/admin/updateschedule/${id}`;
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("auth-token"),
                },
                body: JSON.stringify({
                    title:title,
                    description: desc,
                    venue : venue,
                    date : date
                }),
            });
            let ele = await response.json();
            alert(ele.message);
        } catch (error) {
            alert(error);
        }
    };

  return (
    <div>
        <div className="btn p-2 bd-highlight" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <span className="material-symbols-outlined">
                                settings
                            </span>
        </div>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Changes? Do it Here!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="col-md-12 my-3">
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="name"
                                                placeholder={props.title}
                                                onChange={handleTitle}
                                            />
                                            <div class="valid-feedback">
                                                Username field is valid!
                                            </div>
                                            <div class="invalid-feedback">
                                                Username field cannot be blank!
                                            </div>
                                        </div>

                                        <div class="col-md-12 my-3">
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="venue"
                                                placeholder={props.venue}
                                                onChange={handleVenue}
                                            />
                                            <div class="valid-feedback">
                                                Venue field is valid!
                                            </div>
                                            <div class="invalid-feedback">
                                                Venue field cannot be blank!
                                            </div>
                                        </div>

                                        <div class="col-md-12 my-3">
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="description"
                                                placeholder={props.description}
                                                onChange={handleDesc}
                                            />
                                            <div class="valid-feedback">
                                                Description field is valid!
                                            </div>
                                            <div class="invalid-feedback">
                                                Description field cannot be
                                                blank!
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <input
                                                class="form-control"
                                                type="date"
                                                name="date"
                                                onChange={handleDate}
                                            />
                                            <div class="valid-feedback">
                                                Date field is valid!
                                            </div>
                                            <div class="invalid-feedback">
                                                Date field cannot be blank!
                                            </div>
                                        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={handleUpdate}>Apply</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
