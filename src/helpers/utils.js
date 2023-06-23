const makeList=(t)=>{
    return (
        <ul>
        {t.split(",/").map((item,index)=><li key={`i-${index}`}>{item}</li>)}
    </ul>
    )
    
}
export const renderParagraph=(page,ind,string)=>{
    return (
      string.split('\r\n').map((t,index)=>
      <span key={`${page}-${ind}-${index}`}>
          {t.split(',/').length>1 ?makeList(t):t}
          <br/>
      </span>
          )
    )
}