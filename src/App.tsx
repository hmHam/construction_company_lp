import React, { useState } from 'react';
import { Building2, Phone, Mail, MapPin, Clock, MessageCircle, ChevronRight, Award, Users, Home, PenTool as Tool, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Building2 className="w-8 h-8 text-blue-600 mr-3" />
              <span className="text-xl font-bold">○○建設</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                選ばれる理由
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                事業内容
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                お問い合わせ
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                選ばれる理由
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                事業内容
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                お問い合わせ
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">未来を築く、信頼の建築パートナー</h1>
              <p className="text-xl mb-8">
                50年以上の実績と信頼。あなたの夢をカタチにする、プロフェッショナルな建築サービスをご提供します。
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center"
              >
                お問い合わせ
                <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="about" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">選ばれる3つの理由</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">50年以上の実績</h3>
              <p className="text-gray-600">
                半世紀以上にわたる経験と実績で、確かな品質をお約束します。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">専門スタッフ</h3>
              <p className="text-gray-600">
                熟練の技術者が、お客様のご要望に丁寧に対応いたします。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Tool className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">確かな技術力</h3>
              <p className="text-gray-600">
                最新の技術と伝統の技を組み合わせた、高品質な施工をご提供。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">事業内容</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <Home className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">住宅建築</h3>
              <p className="text-gray-600">
                新築住宅からリフォームまで、お客様の理想の住まいづくりをサポートいたします。
                耐震性能や省エネ性能にも配慮した、安心・快適な住空間を提供します。
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">商業施設</h3>
              <p className="text-gray-600">
                店舗、オフィス、工場など、業務用建築物の設計・施工を承ります。
                機能性と快適性を両立した空間づくりで、ビジネスの成功をサポートします。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">お問い合わせ</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold mb-2">電話でのお問い合わせ</h3>
                    <p className="text-xl font-bold text-blue-600">0120-XXX-XXX</p>
                    <p className="text-gray-600 mt-1">平日 9:00-18:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold mb-2">LINEでのお問い合わせ</h3>
                    <a 
                      href="https://line.me/ti/p/~YOUR_LINE_ID"
                      className="inline-flex items-center bg-[#00B900] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition duration-300"
                    >
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"
                        alt="LINE"
                        className="w-6 h-6 mr-2"
                      />
                      友だち追加
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold mb-2">所在地</h3>
                    <p className="text-gray-600">〒XXX-XXXX<br />東京都○○区○○町X-X-X</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-6">営業時間</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>月曜日 - 金曜日</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>土曜日</span>
                    <span>9:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>日曜日・祝日</span>
                    <span>休業</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <Building2 className="w-8 h-8 mr-3" />
              <span className="text-xl font-bold">○○建設</span>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center">
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-blue-400 transition duration-300"
              >
                選ばれる理由
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="hover:text-blue-400 transition duration-300"
              >
                事業内容
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-blue-400 transition duration-300"
              >
                お問い合わせ
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 ○○建設 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;