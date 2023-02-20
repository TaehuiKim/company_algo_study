const solution = (priorities, location) => {
  let answer = 0;
  const print_count = Array.from({length: 9}, x => 0);
  
  for(const value of priorities){
      ++print_count[value - 1];
  }
  
  while(priorities.length > 0){
      const print_first = priorities.shift();
      let print_possible = true;
      
      //이것보다 상위에 프린트 할게 남았는가?
      for(var i = 8; print_first - 1 < i; --i){
          if(print_count[i] > 0){
              print_possible = false;
              break;
          }
      }
      
      //프린터 횟수를 알아냈으므로 종료
      if(print_possible && location == 0){
          break;
      }
      
      //프린터가 가능하면
      if(print_possible){ 
          ++answer;
          --print_count[print_first - 1];
      }
      else{
          priorities.push(print_first);
      }
      
      if(location == 0){
          location = priorities.length;
      }
      --location;
  }
  
  return ++answer;
}