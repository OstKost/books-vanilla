export const formTemplate = () =>
	`<div class="bookForm">
        <h2 class="ui header">
            <i class="circular book icon"></i>Редактор книг
        </h2>
        <form class="ui form segment" method="post">
            <input type="text" name="id" hidden></input>
            <div class="field">
                <label>Book title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Book title"
                    required
                ></input>
            </div>
            <div class="field">
                <label>Author name</label>
                <input
                    type="text"
                    name="author"
                    placeholder="Author name"
                    required
                ></input>
            </div>
            <div class="ui divider"></div>
            <div class="ui buttons"></div>
        </form>
    </div>`

export const listTemplate = () =>
	`<div class="bookList">
        <h2 class="ui header">
         <i class="circular list icon"></i>
         Список книг
        </h2>
        <div class="ui segment">    
            <div class="ui relaxed divided list"></div>
        </div>
    </div>`

export const listItemTemplate = () =>
	`<div class="item" key="{{bookId}}">
    <div class="right floated content buttons"></div>
    <div class="content text">
        <div class="header">{{bookTitle}}</div>
        <i>{{bookAuthor}}</i>
    </div>
</div>`

export const formButtonTemplate = () =>
	`<button class="ui button {{classList}}" type="{{type}}">{{text}}</button>`

export const listButtonTemplate = () =>
	`<div class="ui animated fade button basic {{classList}}">
        <div class="hidden content">{{text}}</div>
        <div class="visible content">
            <i class="icon {{icon}}"></i>
        </div>
    </div>`
