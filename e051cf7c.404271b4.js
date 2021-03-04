(window.webpackJsonp=window.webpackJsonp||[]).push([[867],{1069:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||h[d]||i;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},941:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(1069)),o={id:"refetch-container",title:"Refetch Container",original_id:"refetch-container"},c={unversionedId:"refetch-container",id:"version-v3.0.0/refetch-container",isDocsHomePage:!1,title:"Refetch Container",description:"A Refetch Container is also a higher-order component that works like a regular Fragment Container, but provides the additional ability to fetch a new GraphQL query with different variables and re-render the component with the new result.",source:"@site/versioned_docs/version-v3.0.0/Modern-RefetchContainer.md",slug:"/refetch-container",permalink:"/docs/v3.0.0/refetch-container",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-v3.0.0/Modern-RefetchContainer.md",version:"v3.0.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1614893206,sidebar:"version-v3.0.0/docs",previous:{title:"Fragment Container",permalink:"/docs/v3.0.0/fragment-container"},next:{title:"Pagination Container",permalink:"/docs/v3.0.0/pagination-container"}},l=[{value:"<code>createRefetchContainer</code>",id:"createrefetchcontainer",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Available Props",id:"available-props",children:[]}]},{value:"<code>refetch</code>",id:"refetch",children:[{value:"Arguments",id:"arguments-1",children:[]},{value:"Return Value",id:"return-value",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Refetching latest data",id:"refetching-latest-data",children:[]},{value:"Loading more data",id:"loading-more-data",children:[]}]}],b={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A Refetch Container is also a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/higher-order-components.html"}),"higher-order component")," that works like a regular ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./fragment-container"}),"Fragment Container"),", but provides the additional ability to fetch a new GraphQL query with different variables and re-render the component with the new result."),Object(i.b)("p",null,"Table of Contents:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#createrefetchcontainer"}),Object(i.b)("inlineCode",{parentName:"a"},"createRefetchContainer"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#refetch"}),Object(i.b)("inlineCode",{parentName:"a"},"refetch"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#examples"}),"Examples"))),Object(i.b)("h2",{id:"createrefetchcontainer"},Object(i.b)("inlineCode",{parentName:"h2"},"createRefetchContainer")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"createRefetchContainer")," has the following signature:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\ncreateRefetchContainer(\n  component: ReactComponentClass,\n  fragmentSpec: GraphQLTaggedNode | {[string]: GraphQLTaggedNode},\n  refetchQuery: GraphQLTaggedNode,\n): ReactComponentClass;\n\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"component"),": The React Component ",Object(i.b)("em",{parentName:"li"},"class")," of the component requiring the fragment data."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fragmentSpec"),": Specifies the data requirements for the Component via a GraphQL fragment. The required data will be available on the component as props that match the shape of the provided fragment. ",Object(i.b)("inlineCode",{parentName:"li"},"fragmentSpec")," can be one of 2 things:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("inlineCode",{parentName:"li"},"graphql")," tagged fragment. If the fragment uses the name convention ",Object(i.b)("inlineCode",{parentName:"li"},"<FileName><...>_<propName>"),", the fragment's data will be available to the Component as a prop with the given ",Object(i.b)("inlineCode",{parentName:"li"},"<propName>"),".\nIf the fragment name doesn't specify a prop name, the data will be available as a ",Object(i.b)("inlineCode",{parentName:"li"},"data")," prop."),Object(i.b)("li",{parentName:"ul"},"An object whose keys are prop names and values are ",Object(i.b)("inlineCode",{parentName:"li"},"graphql")," tagged fragments. Each key specified in this object will correspond to a prop available to the resulting Component."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Note:")," To enable ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./relay-compat"}),"compatibility mode"),", ",Object(i.b)("inlineCode",{parentName:"li"},"relay-compiler")," enforces fragments to be named as ",Object(i.b)("inlineCode",{parentName:"li"},"<FileName>_<propName>"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"refetchQuery"),": A ",Object(i.b)("inlineCode",{parentName:"li"},"graphql")," tagged query to be fetched upon calling ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#refetch"}),Object(i.b)("inlineCode",{parentName:"a"},"props.relay.refetch")),". As with any query, upon fetching this query, its result will be normalized into the store, any relevant subscriptions associated with the changed records will be fired, and subscribed components will re-render.")),Object(i.b)("h3",{id:"available-props"},"Available Props"),Object(i.b)("p",null,"The Component resulting from ",Object(i.b)("inlineCode",{parentName:"p"},"createRefetchContainer")," will receive the following ",Object(i.b)("inlineCode",{parentName:"p"},"props"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\ntype Props = {\n  relay: {\n    environment: Environment,\n    refetch(), // See #refetch section\n  },\n  // Additional props as specified by the fragmentSpec\n}\n\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"relay"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"environment"),": The current ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./relay-environment"}),"Relay Environment")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"refetch"),": See ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#refetch"}),"docs"))))),Object(i.b)("h2",{id:"refetch"},Object(i.b)("inlineCode",{parentName:"h2"},"refetch")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"refetch")," is a function available on the ",Object(i.b)("inlineCode",{parentName:"p"},"relay")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#available-props"}),"prop")," which can be used to execute the ",Object(i.b)("inlineCode",{parentName:"p"},"refetchQuery")," and potentially re-render the component with the newly fetched data. Specifically, upon fetching the ",Object(i.b)("inlineCode",{parentName:"p"},"refetchQuery"),", its result will be normalized into the store, and any relevant subscriptions associated with the changed records will be fired, causing relevant components to re-render."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," ",Object(i.b)("inlineCode",{parentName:"p"},"refetch")," is meant to be used for changing variables in the component's fragment. Specifically, in order for ",Object(i.b)("em",{parentName:"p"},"this")," component to re-render, it must be subscribed to changes in the records affected by this query. If the fragment for the component doesn't use variables, the component won't be subscribed to changes to new records that might be fetched by this query. A common example of this is using ",Object(i.b)("inlineCode",{parentName:"p"},"refetch")," to fetch a new node and re-render the component with the data for the new node; in this case the fragment needs to use a variable for the node's id, otherwise the component won't pick up the changes for the new node."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"refetch")," has the following signature:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\ntype RefetchOptions = {\n  force?: boolean,\n};\n\ntype Disposable = {\n  dispose(): void,\n};\n\nrefetch(\n  refetchVariables: Object | (fragmentVariables: Object) => Object,\n  renderVariables: ?Object,\n  callback: ?(error: ?Error) => void,\n  options?: RefetchOptions,\n): Disposable,\n\n")),Object(i.b)("h3",{id:"arguments-1"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"refetchVariables"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A bag of variables to pass to the ",Object(i.b)("inlineCode",{parentName:"li"},"refetchQuery")," when fetching it from the server."),Object(i.b)("li",{parentName:"ul"},"Or, a function that receives the previous set of variables used to query the data, and returns a new set of variables to pass to the ",Object(i.b)("inlineCode",{parentName:"li"},"refetchQuery")," when fetching it from the server."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"renderVariables"),": Optional bag of variables that indicate which variables to use for reading out the data from the store when re-rendering the component. Specifically, this indicates which variables to use when querying the data from the\nlocal data store ",Object(i.b)("em",{parentName:"li"},"after")," the new query has been fetched. If not specified, the ",Object(i.b)("inlineCode",{parentName:"li"},"refetchVariables")," will be used. This is useful when the data you need to render in your component doesn't necessarily match the data you queried the server for. For example, to implement pagination, you would fetch a page with variables like ",Object(i.b)("inlineCode",{parentName:"li"},"{first: 5, after: '<cursor>'}"),", but you might want to render the full collection with ",Object(i.b)("inlineCode",{parentName:"li"},"{first: 10}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"callback"),": Function to be called after the refetch has completed. If an error occurred during refetch, this function will receive that error as an argument."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options"),": Optional object containing set of options.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"force"),": If the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./network-layer"}),"Network Layer")," has been configured with a cache, this option forces a refetch even if the data for this query and variables is already available in the cache.")))),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)("p",null,"Returns a ",Object(i.b)("inlineCode",{parentName:"p"},"Disposable")," on which you could call ",Object(i.b)("inlineCode",{parentName:"p"},"dispose()")," to cancel the refetch."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"refetching-latest-data"},"Refetching latest data"),Object(i.b)("p",null,"In this simple example, let's assume we want to fetch the latest data for a ",Object(i.b)("inlineCode",{parentName:"p"},"TodoItem")," from the server:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n// TodoItem.js\nimport {createRefetchContainer, graphql} from 'react-relay';\n\nclass TodoItem extends React.Component {\n  render() {\n    const item = this.props.item;\n    return (\n      <View>\n        <Checkbox checked={item.isComplete} />\n        <Text>{item.text}</Text>\n        <button onPress={this._refetch} title=\"Refresh\" />\n      </View>\n    );\n  }\n\n  _refetch = () => {\n    this.props.relay.refetch(\n      {itemID: this.props.item.id},  // Our refetchQuery needs to know the `itemID`\n      null,  // We can use the refetchVariables as renderVariables\n      () => { console.log('Refetch done') },\n      {force: true},  // Assuming we've configured a network layer cache, we want to ensure we fetch the latest data.\n    );\n  }\n}\n\nexport default createRefetchContainer(\n  TodoItem,\n  graphql`\n    fragment TodoItem_item on Todo {\n      text\n      isComplete\n    }\n  `,\n  graphql`\n    # Refetch query to be fetched upon calling `refetch`.\n    # Notice that we re-use our fragment and the shape of this query matches our fragment spec.\n    query TodoItemRefetchQuery($itemID: ID!) {\n      item: node(id: $itemID) {\n        ...TodoItem_item\n      }\n    }\n  `\n);\n\n")),Object(i.b)("h3",{id:"loading-more-data"},"Loading more data"),Object(i.b)("p",null,"In this example we are using a Refetch Container to fetch more stories in a story feed component."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'\nimport {createRefetchContainer, graphql} from \'react-relay\';\n\nclass FeedStories extends React.Component {\n  render() {\n    return (\n      <div>\n        {this.props.feed.stories.edges.map(\n          edge => <Story story={edge.node} key={edge.node.id} />\n        )}\n        <button\n          onPress={this._loadMore}\n          title="Load More"\n        />\n      </div>\n    );\n  }\n\n  _loadMore() {\n    // Increments the number of stories being rendered by 10.\n    const refetchVariables = fragmentVariables => ({\n      count: fragmentVariables.count + 10,\n    });\n    this.props.relay.refetch(refetchVariables);\n  }\n}\n\nexport default createRefetchContainer(\n  FeedStories,\n  {\n    feed: graphql`\n      fragment FeedStories_feed on Feed\n      @argumentDefinitions(\n        count: {type: "Int", defaultValue: 10}\n      ) {\n        stories(first: $count) {\n          edges {\n            node {\n              id\n              ...Story_story\n            }\n          }\n        }\n      }\n    `\n  },\n  graphql`\n    # Refetch query to be fetched upon calling `refetch`.\n    # Notice that we re-use our fragment and the shape of this query matches our fragment spec.\n    query FeedStoriesRefetchQuery($count: Int) {\n      feed {\n        ...FeedStories_feed @arguments(count: $count)\n      }\n    }\n  `,\n);\n\n')))}s.isMDXComponent=!0}}]);