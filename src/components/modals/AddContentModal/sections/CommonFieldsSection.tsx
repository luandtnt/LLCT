import { ContentFormData } from '../../../../types/content';
import { X } from 'lucide-react';

interface CommonFieldsSectionProps {
  formData: Partial<ContentFormData>;
  onFormDataChange: (data: Partial<ContentFormData>) => void;
  errors: Record<string, string>;
}

export function CommonFieldsSection({ formData, onFormDataChange, errors }: CommonFieldsSectionProps) {
  const [authorInput, setAuthorInput] = React.useState('');

  const handleAddAuthor = () => {
    if (authorInput.trim()) {
      const authors = [...(formData.common?.authors || []), authorInput.trim()];
      onFormDataChange({
        ...formData,
        common: { ...formData.common, authors } as any,
      });
      setAuthorInput('');
    }
  };

  const handleRemoveAuthor = (index: number) => {
    const authors = formData.common?.authors?.filter((_, i) => i !== index) || [];
    onFormDataChange({
      ...formData,
      common: { ...formData.common, authors } as any,
    });
  };

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[8px] p-[20px]">
      <h4 className="text-[16px] font-semibold text-[#111827] mb-[16px]">
        Thông tin chung
      </h4>

      <div className="space-y-[16px]">
        {/* Mã nội dung */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Mã nội dung <span className="text-[#b9000e]">*</span>
          </label>
          <input
            type="text"
            value={formData.common?.code || ''}
            onChange={(e) => onFormDataChange({
              ...formData,
              common: { ...formData.common, code: e.target.value } as any,
            })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="VB-20250130-0001"
          />
          {errors.code && (
            <p className="text-[12px] text-[#b91c1c] mt-[4px]">{errors.code}</p>
          )}
        </div>

        {/* Tên nội dung */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Tên nội dung <span className="text-[#b9000e]">*</span>
          </label>
          <input
            type="text"
            value={formData.common?.title || ''}
            onChange={(e) => onFormDataChange({
              ...formData,
              common: { ...formData.common, title: e.target.value } as any,
            })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Nhập tên nội dung"
          />
          {errors.title && (
            <p className="text-[12px] text-[#b91c1c] mt-[4px]">{errors.title}</p>
          )}
        </div>

        {/* Độ mật */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Độ mật <span className="text-[#b9000e]">*</span>
          </label>
          <select
            value={formData.common?.classification || ''}
            onChange={(e) => onFormDataChange({
              ...formData,
              common: { ...formData.common, classification: e.target.value } as any,
            })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
          >
            <option value="">Chọn độ mật</option>
            <option value="CONG_KHAI">Công khai</option>
            <option value="NOI_BO">Nội bộ</option>
            <option value="MAT">Mật</option>
            <option value="TOI_MAT">Tối mật</option>
          </select>
          {errors.classification && (
            <p className="text-[12px] text-[#b91c1c] mt-[4px]">{errors.classification}</p>
          )}
        </div>

        {/* Tác giả */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Tác giả <span className="text-[#b9000e]">*</span>
          </label>
          <div className="flex gap-[8px] mb-[8px]">
            <input
              type="text"
              value={authorInput}
              onChange={(e) => setAuthorInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddAuthor()}
              className="flex-1 px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
              placeholder="Nhập tên tác giả hoặc cơ quan"
            />
            <button
              onClick={handleAddAuthor}
              className="px-[16px] py-[8px] bg-[#b9000e] text-white rounded-[4px] text-[14px] hover:bg-[#9a0000]"
            >
              Thêm
            </button>
          </div>
          {formData.common?.authors && formData.common.authors.length > 0 && (
            <div className="flex flex-wrap gap-[8px]">
              {formData.common.authors.map((author, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-[6px] px-[10px] py-[4px] bg-[#f3f4f6] rounded-[4px]"
                >
                  <span className="text-[14px] text-[#111827]">{author}</span>
                  <button
                    onClick={() => handleRemoveAuthor(index)}
                    className="text-[#6b7280] hover:text-[#b91c1c]"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
          {errors.authors && (
            <p className="text-[12px] text-[#b91c1c] mt-[4px]">{errors.authors}</p>
          )}
        </div>

        {/* Ngôn ngữ */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Ngôn ngữ
          </label>
          <input
            type="text"
            value={formData.common?.language || 'Tiếng Việt'}
            onChange={(e) => onFormDataChange({
              ...formData,
              common: { ...formData.common, language: e.target.value } as any,
            })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
          />
        </div>
      </div>
    </div>
  );
}

// Add React import at the top
import React from 'react';
