import React from 'react';

const CyclinderAvaliability = () => {

   const cyclinder =  [  
        {  
            "s_no": 1,  
            "cylinder_type": "5 kg Cylinder",  
            "full_cylinder": 34,  
            "empty_cylinder": 43,  
            "due_empty_cylinder": 66  
        },  
        {  
            "s_no": 2,  
            "cylinder_type": "14 kg Cylinder",  
            "full_cylinder": 20,  
            "empty_cylinder": 30,  
            "due_empty_cylinder": 15  
        },  
        {  
            "s_no": 3,  
            "cylinder_type": "17 kg Cylinder",  
            "full_cylinder": 15,  
            "empty_cylinder": 25,  
            "due_empty_cylinder": 10  
        },
        {  
            "s_no": 4,  
            "cylinder_type": "19 kg Cylinder",  
            "full_cylinder": 5,  
            "empty_cylinder": 35,  
            "due_empty_cylinder": 15  
        }  ,
        {  
            "s_no": 5,  
            "cylinder_type": "21 kg Cylinder",  
            "full_cylinder": 45,  
            "empty_cylinder": 65,  
            "due_empty_cylinder": 20  
        } ,
        {  
            "s_no": 6,  
            "cylinder_type": "45 kg Cylinder",  
            "full_cylinder": 15,  
            "empty_cylinder": 35,  
            "due_empty_cylinder": 16  
        } ,

    ]



  return (
    <div>  
    <h3 className='text-center my-3'>ℂ𝕪𝕔𝕝𝕚𝕟𝕕𝕖𝕣 𝔸𝕧𝕒𝕝𝕒𝕓𝕚𝕝𝕚𝕥𝕪</h3>  
    <div className="container card">  
        <div className="row">  
        <div className='table-responsive'>
            <table className='table mt-2 table-striped table-bordered'>  
                <thead className='table-head'>  
                    <tr>  
                        <th>S.No</th>  
                        <th>Cylinder Type</th>  
                        <th>Full Cylinder</th>  
                        <th>Empty Cylinder</th>  
                        <th>Due Empty Cylinder</th>  
                    </tr>  
                </thead>  
                <tbody>  
                   
                    { cyclinder && cyclinder.map(item=>
                      <tr className='table-hover' key={item.s_no}>
                       <td>{item.s_no}</td>  
                        <td>{item.cylinder_type}</td>  
                        <td>{item.full_cylinder}</td>  
                        <td>{item.empty_cylinder}</td>  
                        <td>{item.due_empty_cylinder}</td> </tr>
                    
                    )
                    }


                   
                   
                    
                </tbody>  
            </table>  
        </div> </div> 
    </div>  
</div>
  );
}

export default CyclinderAvaliability;
