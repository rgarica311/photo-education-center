import React, { Component } from 'react';
import BackgroundPhoto from '../Components/BackgroundPhoto/BackgroundPhoto.js';


export default class MainComponents extends Component {
  constructor(props){
    super(props)
    this.state = {
      path: props.path,
    }
  }
  render(){
    return (
      <>
      {
        this.state.path === '/'
          ? <BackgroundPhoto/>
          :this.state.path === '/about-us'
            ?<AboutEdu/>
            :thid.state.path === '/classes'
              ?<ClassAdvenEvent/>
              :this.state.path === '/adventures'
                ?<ClassAdvenEvent/>
                :this.state.path === '/events'
                  ?<ClassAdvenEvent/>
                  :this.state.path === '/fundraisers'
                    ?<Fundraisers/>
                    :this.state.path === '/galleries'
                      ? null
                      :this.state.path === '/calendar'
                        ? <Calendar/>
                        :this.state.path === '/educators'
                          ?<AboutEdu/>
                          :this.state.path === '/reviews'
                            ?<Reviews/>
                            :this.state.path === '/faq'
                              ?<Faq/>
                              :this.state.path === '/gift-card'
                                ?<GiftCard/>
                                :this.state.path === '/policies'
                                  ?<Policies/>
                                  :this.state.path === '/contact-us'
                                    ?<ContactUs/>
                                    :this.state.path === '/beginner'
                                      ?<Class/>
                                      :this.state.path === '/photo-boot-camp'
                                        ?<Class/>
                                        :this.state.path === '/intermediate-2019'
                                          ?<Class/>
                                          :this.state.path === '/intermediate-2020'
                                            ?<Class/>
                                            :this.state.path === '/advanced-2020'
                                              ?<Class/>
                                              :this.state.path === '/photo-editing'
                                                ?<Class/>
                                                :this.state.path === '/private-lessons'
                                                  ?<Class/>
                                                  :this.state.path === '/yosemite-winter-photo-adventure'
                                                    ?<Adventure/>
                                                    :this.state.path === '/death-valley-adventure'
                                                      ?<Adventure/>
                                                      :this.state.path === '/scotlan-photo-adventure'
                                                        ?<Adventure/>
                                                        :this.state.path === '/africa-cultural-safari-2020'
                                                          ?<Adventure/>
                                                          :this.state.path === '/cuba-2020'
                                                            ?<Adventure/>
                                                            :this.state.path === '/tuscany-2020'
                                                              ?<Adventure/>
                                                              :null
        }
      </>
    )
  }
}
