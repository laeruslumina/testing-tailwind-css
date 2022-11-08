import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const param = useParams();
  const navigate = useNavigate();

  const fetchProduct = async (id) => {
    try {
      const url = `/api/v1/products/${id}`;
      const response = await api.get(url);
      const payload = { ...response?.data?.data?.product };
      console.log(payload);
      setProduct(payload || {});
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (param.id) {
      fetchProduct(param.id);
    }
  }, [param.id]);

  return (
    <>
      <div className="text-center mt-5">
        <h1 className="text-3xl font-bold">DetailProduct</h1>
        <p>Nama Produk : {product?.name} </p>
        <p>Harga : {product?.price} </p>
        <p>Yang Jual : {product?.ownerId?.name}</p>
        <Button type="primary" onClick={() => navigate(-1)}>
          Pulang
        </Button>
      </div>
    </>
  );
};

export default DetailProduct;
