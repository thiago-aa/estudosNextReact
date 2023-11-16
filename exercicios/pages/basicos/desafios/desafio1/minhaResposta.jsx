const toList = num => {
  const list = [];
 for( let count = 1; count <= num; count++) {
  count !== num ? list.push(<span key={count}>{count}, <br /></span>) : list.push(<span key={count}>{count} <br /></span>)
 }

 return list;
}

export default () => <div>{toList(10)}</div>
