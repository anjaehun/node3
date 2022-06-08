//√ Site는 n개 이상 생성 할 수 있다. (2 ms)                                                                                                                                                                                        
//√ Site에는 Board를 추가하고 추가된 Board를 조회할 수 있다. (1 ms)                                                                                                                                                                
//√ 하나의 Site에 동일한 이름의 Board를 추가할 수 없다.                                                                                                                                                                            
//√ Board는 n개 이상 추가 할 수 있다. (1 ms)      
////board////
//  'Site 에 추가된 Board만 사용 가능한 것으로 간주하며 
//   사용 불가능한 Board에는 Article을 추가할 수 없다.
 console.log("test")
class Site {
    
    constructor() {
            this.boards = [];       
    }

   

     //√ Site는 n개 이상 생성 할 수 있다. (2 ms)  
     addBoard(board) {
         
       if(this.boards.find((exisBoard) => exisBoard.name === board.name)){
           throw new Error('이름이 같으면 안됨');
       }

       board.flag = true;

       this.boards.push(board);
    }

     //× Site에는 Board를 추가하고 추가된 Board를 조회할 수 있다. (1 ms)              
     findBoardByName(){
        return this.boards.find((board) => board.name);    
    }    
    

}

class Board {
    
    // Board는 name 데이터를 포함해야 하며 null 또는 빈 문자열("")은 허용하지 않는다.  
    constructor(boardName){
       // this.list = [content, author]; 
        if(!boardName || boardName === ""){
            throw new Error('값이 안들어가면 안됨');s
        } 
              
       this.name = boardName;      
       this.article = [];   
       this.flag = false;      
   }  

    
    publish(article){

        console.log([article])
        
        //Site 에 추가된 Board만 사용 가능한 것으로 간주하며 사용 불가능한 Board에는 Article을 추가할 수 없다.    
        if(this.flag == false){
            throw new Error();
        }
        article.flag = true;

        
        // Board에 Article을 추가할 때 Article에 ID를 자동 생성해서 부여해야 한다
            const random = Math.random()*100;    
            article.id = `${this.name}-${random}`; 
        
        // Board에 Article을 추가할 때 Article에 작성 일자가 들어가야 한다.    
            const d = new Date();
            const text = d.toISOString();
       
            article.createdDate = text;  
            
            this.article.push (
                article
            );
            
    }
       
    // 작성된 Comment 목록을 조회 할 수 있어야 한다. 
    getAllArticles(){           
        return this.article;
    }     

    
}

class Article {
     constructor(article){   
        const { subject, content, author } = article ;
    //Article은 subject, content, author 3개의 데이터를 포함해야 하며 null 또는 빈 문자열("")은 허용하지 않는다.
        if(!subject||subject=="" || !content||content === "" || !author||author === ""){
        throw new Error();
        }
        this.comments = [];    
        this.subject = subject;
        this.content = content; 
        this.author  = author;  
        this.flag = false;       
     }   
     
     reply(comment){
        if(this.flag === false){
            throw new Error() ;
        }
        
        const d = new Date();
        const text = d.toISOString();
       
        comment.createdDate = text;      
        
        this.comments.push (comment);   
    }
   
    getAllComments(){
        return this.comments;
    }
    
}
class Comment {
    constructor({content , author}){   
        if( !content || content === ""|| !author || author === ""){
            throw new Error();
        }
        this.content = content; 
        this.author  = author;      
    };    
     
}


module.exports = {
    Site,
    Board,
    Article,
    Comment,
};

