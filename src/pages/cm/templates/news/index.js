import React from 'react';


function News() {
  const headline = idx(this.props.news.meta, n => n.block_hero.headline);
  const secondary = idx(this.props.news.meta, n => n.block_hero.secondary);
  console.log('secondary', secondary);
  return (
    <React.Fragment>
      <Header
        transparent
        offsetTop={10}
      />
      <Hero
        image="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&w=1350&q=80"
        headline={headline}
        description={secondary}
      />
      <div style={{ margin: '200px 0', textAlign: 'center' }}>Content</div>

      <NewsList newsItems={this.props.newsItems} />
      <Footer />
    </React.Fragment>
  );
}

export default News;
