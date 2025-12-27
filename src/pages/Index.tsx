import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const reviews = [
    {
      name: "Алексей М.",
      rating: 5,
      text: "Заказываю постоянно! Доставка быстрая, ассортимент отличный. Всегда свежие напитки и хорошие цены.",
      date: "2 дня назад"
    },
    {
      name: "Мария К.",
      rating: 5,
      text: "Идеальный сервис для вечеринок! Привезли всё за 30 минут, курьер вежливый. Рекомендую всем!",
      date: "неделю назад"
    },
    {
      name: "Дмитрий С.",
      rating: 5,
      text: "Очень удобно заказывать через Telegram. Цены приятные, доставка оперативная. Буду заказывать еще!",
      date: "2 недели назад"
    }
  ];

  const features = [
    {
      icon: "Clock",
      title: "Быстрая доставка",
      description: "30-60 минут до вашей двери"
    },
    {
      icon: "ShieldCheck",
      title: "100% качество",
      description: "Только оригинальная продукция"
    },
    {
      icon: "DollarSign",
      title: "Низкие цены",
      description: "Выгодные предложения каждый день"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="relative container mx-auto px-4 py-8">
          <nav className="flex justify-between items-center mb-16 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🍸</div>
              <span className="text-2xl font-montserrat font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ДжинКотик
              </span>
            </div>
            <Button 
              asChild
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 font-montserrat font-semibold text-base px-6 transition-all hover:scale-105"
            >
              <a href="https://t.me/GINKOTIK54" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={20} className="mr-2" />
                Заказать в Telegram
              </a>
            </Button>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] mb-20">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold leading-tight">
                Доставка
                <span className="block bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
                  алкоголя
                </span>
                <span className="block">на дом</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Быстрая доставка качественного алкоголя в Новосибирске. Большой выбор напитков по доступным ценам.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 font-montserrat font-semibold text-lg px-8 py-6 transition-all hover:scale-105 shadow-lg shadow-primary/30"
                >
                  <a href="https://t.me/GINKOTIK54" target="_blank" rel="noopener noreferrer">
                    <Icon name="ShoppingCart" size={24} className="mr-2" />
                    Сделать заказ
                  </a>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-montserrat font-semibold text-lg px-8 py-6 border-2 hover:bg-primary/10 transition-all hover:scale-105"
                >
                  <a href="#reviews">
                    <Icon name="Star" size={24} className="mr-2" />
                    Отзывы
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background flex items-center justify-center text-white font-bold"
                    >
                      😊
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon key={i} name="Star" size={16} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">500+ довольных клиентов</p>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-30 rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/files/copy_CDB14EE2-6D29-47EC-A750-F05B13C01457.jpg"
                alt="ДжинКотик - доставка напитков"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon} size={28} className="text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Отзывы наших клиентов
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Icon key={i} name="Star" size={28} className="fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-xl text-muted-foreground">Рейтинг 5.0 на основе 500+ отзывов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card
                key={idx}
                className="p-6 bg-card hover:bg-card/80 transition-all hover:scale-105 hover:shadow-xl animate-fade-in-up group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-montserrat font-bold text-lg">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 backdrop-blur-sm animate-scale-in">
            <div className="text-center space-y-6">
              <div className="text-6xl mb-4">🍸</div>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
                Готовы сделать заказ?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Переходите в наш Telegram-канал и оформляйте заказ прямо сейчас. Доставка 30-60 минут!
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 font-montserrat font-bold text-xl px-12 py-8 transition-all hover:scale-110 shadow-2xl shadow-primary/40"
              >
                <a href="https://t.me/GINKOTIK54" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={28} className="mr-3" />
                  Открыть Telegram
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🍸</div>
              <span className="text-xl font-montserrat font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ДжинКотик
              </span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-muted-foreground mb-2">Доставка алкоголя в Новосибирске</p>
              <a 
                href="https://t.me/GINKOTIK54" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2 justify-center md:justify-start"
              >
                <Icon name="Send" size={18} />
                @GINKOTIK54
              </a>
            </div>
            <div className="text-muted-foreground text-sm">
              © 2024 ДжинКотик. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;