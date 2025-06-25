import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(cartItems.map((item) => item.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleDeleteSelected = () => {
    const newCart = cartItems.filter((item) => !selectedIds.includes(item.id));
    setCartItems(newCart);
    setSelectedIds([]);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleOptionChange = (id, newOption) => {
    const newCart = cartItems.map((item) => {
      if (item.id === id) {
        const newPrice = newOption === '1년 수강' ? 120000 : 175000;
        return { ...item, option: newOption, price: newPrice };
      }
      return item;
    });
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handlePayment = () => {
    const selectedItems = cartItems.filter((item) => selectedIds.includes(item.id));

    if (selectedItems.length === 0) {
      alert('결제할 강의를 선택해주세요.');
      return;
    }

    const totalAmount = selectedItems.reduce((acc, item) => acc + item.price, 0);

    alert(`총 ${selectedItems.length}개의 강의를 ₩${totalAmount.toLocaleString()}에 결제했습니다! 🎉`);

    const remainingItems = cartItems.filter((item) => !selectedIds.includes(item.id));
    setCartItems(remainingItems);
    setSelectedIds([]);
    localStorage.setItem('cart', JSON.stringify(remainingItems));
  };

  const totalSelectedPrice = cartItems
    .filter((item) => selectedIds.includes(item.id))
    .reduce((acc, item) => acc + item.price, 0);

  return (
    <section style={{ width: '100vw', margin: '120px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '1270px', margin: '0 auto', padding: '40px' }}>
        {/* 왼쪽: 강의 목록 */}
        <div style={{ width: '65%' }}>
          <h2 style={{ marginBottom: '20px' }}>장바구니</h2>

          {cartItems.length === 0 ? (
            <div
              style={{
                padding: '60px',
                textAlign: 'center',
                border: '1px solid #ddd',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <img
                src="/icons/empty-cart.svg"
                alt="빈 장바구니"
                style={{ width: '120px', marginBottom: '20px', opacity: 0.5 }}
              />
              <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>장바구니가 비어있어요.</p>
              <p style={{ color: '#666', fontSize: '14px' }}>관심 있는 강의를 담아보세요!</p>
              <button
                onClick={() => navigate('/')}
                style={{
                  marginTop: '30px',
                  backgroundColor: '#E57373',
                  color: '#fff',
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                강의 보러 가기
              </button>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedIds.length === cartItems.length && cartItems.length > 0}
                />
                <span>전체 선택</span>
                <button onClick={handleDeleteSelected} style={{ marginLeft: 'auto' }}>
                  선택 삭제
                </button>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    borderBottom: '1px solid #ccc',
                    padding: '20px 0',
                    alignItems: 'center',
                    gap: '20px',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  <img
                    src={item.image || '/images/placeholder.jpg'}
                    alt={item.title}
                    width="120"
                    style={{ borderRadius: '8px' }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '5px' }}>{item.title}</div>
                    <div style={{ color: '#777', fontSize: '14px', marginBottom: '10px' }}>{item.author}</div>
                    <select
                      value={item.option}
                      onChange={(e) => handleOptionChange(item.id, e.target.value)}
                      style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
                    >
                      <option value="1년 수강">1년 수강</option>
                      <option value="무제한 수강">무제한 수강</option>
                    </select>
                  </div>
                  <div style={{ minWidth: '100px', textAlign: 'right' }}>
                    <div style={{ textDecoration: 'line-through', color: '#999', fontSize: '13px' }}>
                      ₩{Number(item.originalPrice).toLocaleString()}
                    </div>
                    <div style={{ fontWeight: 'bold', color: '#000' }}>₩{Number(item.price).toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* 오른쪽: 결제 정보 */}
        <div
          style={{
            width: '25%',
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '30px',
            height: 'fit-content',
          }}
        >
          <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px' }}>총 상품 금액</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '30px' }}>
            ₩{totalSelectedPrice.toLocaleString()}
          </p>
          <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px' }}>총 결제 금액</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '30px' }}>
            ₩{totalSelectedPrice.toLocaleString()}
          </p>
          <button
            onClick={handlePayment}
            disabled={selectedIds.length === 0}
            style={{
              backgroundColor: selectedIds.length === 0 ? '#ccc' : '#E57373',
              color: '#fff',
              width: '100%',
              padding: '15px',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '15px',
              cursor: selectedIds.length === 0 ? 'not-allowed' : 'pointer',
            }}
          >
            결제 하기
          </button>
          <p style={{ fontSize: '12px', color: '#999', marginTop: '15px' }}>
            회원 본인은 주문 내용을 확인했으며, 구매조건 및 개인정보처리방침과 결제에 동의합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
