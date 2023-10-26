import React , {useState} from 'react'

export default function TimelineEdit(props) {


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
            const apiUrl = `${process.env.REACT_APP_BASE_URL}/api/admin/updateschedule/${id}`;
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
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
