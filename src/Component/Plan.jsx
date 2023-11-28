

const Plan = () => {
    return (
        <div>
            <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  Day-1
  </div>
  <div className="collapse-content"> 
    <p>Hiking,mountain-climing,hunting</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
   Day-2
  </div>
  <div className="collapse-content"> 
    <p>river--selling,bungi-jumps</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Day-3
  </div>
  <div className="collapse-content"> 
    <p>sports,visiting ice-place</p>
  </div>
</div>
            
        </div>
    );
};

export default Plan;